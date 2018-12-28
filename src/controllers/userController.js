import routes from '../routes';

const BaseDir = 'users';

export const join = (req, res) => {
  if (req.method === 'GET') {
    res.render(`${BaseDir}/join`, { pageTitle: 'Join' });
  } else {
    const {
      name,
      email,
      password,
      password2,
    } = req.body;

    if (password !== password2) {
      res.status(400);
      res.render(`${BaseDir}/join`, { pageTitle: 'Join' });
    } else {
      res.redirect(routes.home);
    }
  }
}


export const login = (req, res) => {
  if (req.method === 'GET') {
    res.render(`${BaseDir}/login`, {pageTitle: 'Login'});
  } else {
    const {
      email,
      password,
    } = req.body;

    res.redirect(routes.home);
  }
}

export const logout = (req, res) => {
  res.redirect(routes.home);
}

// export const videoDetail = (req, res) => res.render(`${BaseDir}/detail`, { pageTitle: 'Detail Video' });
// export const videoEdit = (req, res) => res.render(`${BaseDir}/edit`, { pageTitle: 'Edit Video' });
// export const videoDelete = (req, res) => res.render(`${BaseDir}/delete`, { pageTitle: 'Delete Video' });
export const users = (req, res) => res.send('users');
export const userDetail = (req, res) => res.render(`${BaseDir}/detail`, { pageTitle: 'Profile' });
export const userEdit = (req, res) => res.render(`${BaseDir}/edit`, { pageTitle: 'Edit Profile' });
export const userChangePassword = (req, res) => res.render(`${BaseDir}/changePassword`, { pageTitle: 'Change Password' });
