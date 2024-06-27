import multer from 'multer';
import cloudinary from 'cloudinary';
import AppError from '../utils/appError';

const storage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image')) {
    return cb(
      new AppError('Not an image! Please upload images only images.', 400),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter: multerFilter,
  // limits: {
  //   fileSize: 5 * 1024 * 1024, // 5MB
  // },
});

export async function uploadImages(imageFiles) {
  const uploadPromises = imageFiles.map(async (image) => {
    const b64 = Buffer.from(image.buffer).toString('base64');
    let dataURI = `data:${image.mimetype};base64,${b64}`;
    const res = await cloudinary.v2.uploader.upload(dataURI);
    return res.url;
  });

  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}

export default upload;
