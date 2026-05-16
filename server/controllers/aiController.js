import User from "../models/User.js";

import Chat from "../models/Chat.js";

import { generateAIResponse } from "../services/openaiService.js";

export const aiChat = async (
  req,
  res
) => {
  try {
    const user = await User.findById(
      req.user.id
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // FREE LIMIT
    if (
      user.plan === "free" &&
      user.aiUsage >= user.aiLimit
    ) {
      return res.status(403).json({
        success: false,
        message:
          "Free plan limit reached",
      });
    }

    const { prompt } = req.body;

    const response =
      await generateAIResponse(prompt);

    // SAVE CHAT
    await Chat.create({
      user: user._id,
      prompt,
      response,
    });

    // UPDATE AI USAGE
    user.aiUsage += 1;

    await user.save();

    res.json({
      success: true,
      response,

      usage: {
        used: user.aiUsage,
        limit: user.aiLimit,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "AI Error",
    });
  }
};

export const getChatHistory = async (
  req,
  res
) => {
  try {
    const chats = await Chat.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      chats,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
    });
  }
};