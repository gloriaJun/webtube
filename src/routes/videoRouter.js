import express from 'express';
import routes from '../routes';
import {
  upload,
  videoDelete,
  videoDetail,
  videoEdit,
} from '../controllers/videoController';
import { onlyPrivate, uploadVideo } from '../middlewares';

const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, onlyPrivate, upload);
videoRouter.post(routes.videoUpload, uploadVideo, upload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.videoEdit(), onlyPrivate, videoEdit);
videoRouter.post(routes.videoEdit(), videoEdit);

videoRouter.get(routes.videoDelete(), onlyPrivate, videoDelete);

export default videoRouter;
