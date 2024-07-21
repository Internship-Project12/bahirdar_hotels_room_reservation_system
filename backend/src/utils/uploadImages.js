import cloudinary from 'cloudinary';
import AppError from './appError.js';

export async function uploadImages(imageFiles, next) {
  try {
    const uploadPromises = imageFiles.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString('base64');
      let dataURI = `data:${image.mimetype};base64,${b64}`;
      const res = await cloudinary.v2.uploader.upload(dataURI);
      return res.url;
    });

    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
  } catch (error) {
    console.error('🔥', error);
    return next(
      new AppError(
        'Unable to upload images, try again or check you connection',
        500
      )
    );
  }
}

export async function uploadSingleImage(image) {
  try {
    const b64 = Buffer.from(image.buffer).toString('base64');
    let dataURI = `data:${image.mimetype};base64,${b64}`;
    const res = await cloudinary.v2.uploader.upload(dataURI);
    return res.url;
  } catch (error) {
    console.error('🔥', error);
    return next(new AppError('Unable to upload photo, Please try again', 500));
  }
}
