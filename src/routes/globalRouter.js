import express from 'express';
import routes from '../routes';
import { home, search } from '../controllers/videoController';
import { doLogin, join, login, logout } from '../controllers/userController';
import { onlyPublic } from '../middlewares';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, onlyPublic, join);
globalRouter.post(routes.join, join, doLogin);

globalRouter.get(routes.login, login);
globalRouter.post(routes.login, doLogin);

globalRouter.get(routes.logout, logout);

export default globalRouter;
