import express from 'express';
import routes from '../routes';
import {
  userChangePassword,
  userDetail,
  userEdit,
  users,
} from '../controllers/userController'

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.userEdit, userEdit);
userRouter.get(routes.userChangePassword, userChangePassword);

export default userRouter;
