import passport from 'passport';
import GithubStrategy from 'passport-github';
import dotenv from 'dotenv';

import Users from './models/Users';
import { loginByGithubCallback } from './controllers/userController';
import routes from './routes';

dotenv.config();

passport.use(Users.createStrategy());
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:3000${routes.githubCallback}`,
    },
    // 사용자가 깃헙으로 갔다가 돌아오면 수행되는 함수
    loginByGithubCallback,
  ),
);

passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());
