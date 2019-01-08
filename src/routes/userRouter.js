import express from 'express';
import routes from '../routes';
import {
  userChangePassword,
  userDetail,
  userEdit,
  users,
} from '../controllers/userController';
import { onlyPrivate } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.users, onlyPrivate, users);
userRouter.get(routes.userDetail(), onlyPrivate, userDetail);
userRouter.get(routes.userEdit, onlyPrivate, userEdit);
userRouter.get(routes.userChangePassword, onlyPrivate, userChangePassword);

export default userRouter;
