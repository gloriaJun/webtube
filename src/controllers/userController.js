import passport from 'passport';

import routes from '../routes';
import Users from '../models/Users';

const BaseDir = 'users';

export const join = async (req, res, next) => {
  if (req.method === 'GET') {
    res.render(`${BaseDir}/join`, { pageTitle: 'Join' });
  } else {
    const { name, email, password, password2 } = req.body;

    if (password !== password2) {
      res.status(400);
      res.render(`${BaseDir}/join`, { pageTitle: 'Join' });
    } else {
      try {
        const user = await Users({
          name,
          email,
        });

        await Users.register(user, password);
        next();
      } catch (e) {
        console.log(e);
        res.redirect(routes.home);
      }
    }
  }
};

export const login = (req, res) => {
  res.render(`${BaseDir}/login`, { pageTitle: 'Login' });
};

export const githubLogin = passport.authenticate('github', {
  failureRedirect: routes.login,
});

export const loginByGithubCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb,
) => {
  const {
    _json: { id, avatar_url, name, email },
  } = profile;

  try {
    const user = await Users.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
    } else {
      const newUser = await Users.create({
        email,
        name,
        githubId: id,
        avatarUrl: avatar_url,
      });
      return cb(null, newUser);
    }
  } catch (e) {
    console.log(e);
    return cb(e);
  }
};

export const facebookLogin = passport.authenticate('facebook', {
  failureRedirect: routes.login,
});

export const loginByFacebookCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb,
) => {
  const {
    _json: { id, picture: { data: { url } }, displayName, email },
  } = profile;

  console.log(profile);

  try {
    const user = await Users.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
    } else {
      const newUser = await Users.create({
        email,
        name: displayName,
        facebookId: id,
        avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`,
        // avatarUrl: url,
      });
      return cb(null, newUser);
    }
  } catch (e) {
    console.log(e);
    return cb(e);
  }
};

export const doLoginBySocial = (req, res) => {
  res.redirect(routes.home);
};

export const doLogin = passport.authenticate('local', {
  successRedirect: routes.home,
  failureRedirect: routes.login,
});

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const users = (req, res) => {
  res.send('users');
};

export const userDetail = (req, res) => {
  res.render(`${BaseDir}/detail`, { pageTitle: 'Profile', user: req.user });
};

export const userEdit = (req, res) =>
  res.render(`${BaseDir}/edit`, { pageTitle: 'Edit Profile' });
export const userChangePassword = (req, res) =>
  res.render(`${BaseDir}/changePassword`, { pageTitle: 'Change Password' });
