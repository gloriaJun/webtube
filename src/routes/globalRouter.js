import express from 'express';
import routes from '../routes';
import { home, search } from '../controllers/videoController';
import {
  doLogin,
  githubLogin,
  githubLogin2,
  doLoginByGithub,
  join,
  login,
  logout,
} from '../controllers/userController';
import { onlyPrivate, onlyPublic } from '../middlewares';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, onlyPublic, join);
globalRouter.post(routes.join, join, doLogin);

globalRouter.get(routes.login, login);
globalRouter.post(routes.login, doLogin);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(routes.githubCallback, githubLogin2, doLoginByGithub);

globalRouter.get(routes.logout, onlyPrivate, logout);

export default globalRouter;
