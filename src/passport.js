import passport from 'passport';
import GithubStrategy from 'passport-github';
import FacebookStrategy from 'passport-facebook';

import Users from './models/Users';
import {
  loginByFacebookCallback,
  loginByGithubCallback,
} from './controllers/userController';
import routes from './routes';

passport.use(Users.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // callbackURL: `http://localhost:3000${routes.githubCallback}`,
      callbackURL: `${routes.githubCallback}`,
    },
    // 사용자가 깃헙으로 갔다가 돌아오면 수행되는 함수
    loginByGithubCallback,
  ),
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      // callbackURL: `http://localhost:3000${routes.facebookCallback}`,
      callbackURL: `https://witty-bear-55.localtunnel.me${
        routes.facebookCallback
      }`,
      profileFields: ['id', 'displayName', 'photos', 'email'],
      scope: ['public_profile', 'email'],
    },
    loginByFacebookCallback,
  ),
);

passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());
