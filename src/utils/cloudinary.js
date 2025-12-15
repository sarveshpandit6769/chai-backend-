import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
  });

  const uploadOnCloudinary = async (LocalFilePath) => {
    try {
      if (!localFilePath) return null;

      // Upload the image to Cloudinary
      cloudinary.uploader.upload(
        LocalFilePath,
        { folder: "images" },
        (error, result) => {
          resource_type: "auto";
        }
      );

      // file has been uploaded successfully
      console.log("File uploaded to Cloudinary successfully", resource.url);
      return response;

    } catch (error) {
      fs.unlinkSync(localFilePath); 
      return null;
    }
  };

})();

export { uploadOnCloudinary };
