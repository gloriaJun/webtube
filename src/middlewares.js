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
  res.locals.user = req.user || null;

  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
