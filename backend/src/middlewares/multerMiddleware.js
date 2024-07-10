import multer from 'multer';
import AppError from '../utils/appError.js';

const storage = multer.memoryStorage();

// const multerFilter = (req, file, cb) => {
//   if (!file.mimetype.startsWith('image')) {
//     return cb(
//       new AppError('Not an image! Please upload only images.', 400),
//       false
//     );
//   }
// };

const upload = multer({ storage });

export default upload;
