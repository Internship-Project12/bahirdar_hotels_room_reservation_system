import cloudinary from 'cloudinary';
import AppError from './appError.js';

export async function uploadImages(imageFiles, CLOUDINARY_FOLDER, next) {
  try {
    const uploadPromises = imageFiles.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString('base64');
      let dataURI = `data:${image.mimetype};base64,${b64}`;
      const res = await cloudinary.v2.uploader.upload(dataURI, {
        folder: CLOUDINARY_FOLDER,
      });
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

// TODO:
export async function uploadSingleImage(image) {
  try {
    const b64 = Buffer.from(image.buffer).toString('base64');
    let dataURI = `data:${image.mimetype};base64,${b64}`;
    const res = await cloudinary.v2.uploader.upload(dataURI, {
      // there is a folder called 'hotels' inside of the folder 'HotelBookingApp_Intern
      folder: 'HotelBookingApp_Intern/hotels',
    });
    return res.url;
  } catch (error) {
    console.error('🔥', error);
    return next(new AppError('Unable to upload photo, Please try again', 500));
  }
}

// 'http://res.cloudinary.com/*********/image/upload/*******/bookingAppMern/gsuw7y0362jshryvvwhu.png'.split('/').slice(-2).join('/').split('.')[0]; => bookingAppMern/gsuw7y0362jshryvvwhu
export async function deleteImages(...imageUrls) {
  try {
    const publicIds = imageUrls.map((url) => {
      const publicId = url.split('/').slice(-3).join('/').split('.')[0];
      return publicId;
    });

    const res = await cloudinary.v2.api.delete_resources(publicIds);
    return res;
  } catch (error) {
    console.error('🔥', error);
  }
}
