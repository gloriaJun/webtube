import multer from 'multer';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const multerVideo = multer({
  dest: process.env.UPLOAD_VIDEO_PATH,
});
export const uploadVideo = multerVideo.single('videoFile');

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WebTube';
  res.locals.routes = routes;
  res.locals.user = {
    // isAuthenticated: true,
    // id: 1,
  };

  next();
};
