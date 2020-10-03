import multer from 'multer';
import routes from './routes';
import { FALSE } from 'node-sass';

const multerVideo = multer({ dest: 'uploads/videos/' });

export const localsMiddleware = (rep, res, next) => {
  res.locals.siteName = 'J-Log';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single('videoFile');
