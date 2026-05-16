import cloudinary from "../services/cloudinary.js";

export const uploadImage = async (
  req,
  res
) => {
  try {
    const result =
      await cloudinary.uploader.upload(
        req.file.path
      );

    res.json({
      success: true,
      image: result.secure_url,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
    });
  }
};