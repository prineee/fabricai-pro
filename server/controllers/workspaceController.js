import Organization from "../models/Organization.js";

import User from "../models/User.js";

export const createWorkspace =
  async (req, res) => {
    try {
      const { name } = req.body;

      const organization =
        await Organization.create({
          name,

          owner: req.user.id,

          members: [req.user.id],
        });

      await User.findByIdAndUpdate(
        req.user.id,
        {
          organization:
            organization._id,
        }
      );

      res.json({
        success: true,
        organization,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
      });
    }
  };

export const inviteMember =
  async (req, res) => {
    try {
      const {
        organizationId,
        userId,
      } = req.body;

      const organization =
        await Organization.findById(
          organizationId
        );

      organization.members.push(
        userId
      );

      await organization.save();

      await User.findByIdAndUpdate(
        userId,
        {
          organization:
            organizationId,
        }
      );

      res.json({
        success: true,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
      });
    }
  };