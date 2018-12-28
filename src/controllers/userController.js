const BaseDir = 'users';

export const join = (req, res) => res.render(`${BaseDir}/join`, { pageTitle: 'Join' });
export const login = (req, res) => res.render(`${BaseDir}/login`, { pageTitle: 'Login' });
export const logout = (req, res) => res.render(`${BaseDir}/logout`, { pageTitle: 'Logout' });
// export const videoDetail = (req, res) => res.render(`${BaseDir}/detail`, { pageTitle: 'Detail Video' });
// export const videoEdit = (req, res) => res.render(`${BaseDir}/edit`, { pageTitle: 'Edit Video' });
// export const videoDelete = (req, res) => res.render(`${BaseDir}/delete`, { pageTitle: 'Delete Video' });
export const users = (req, res) => res.send('users');
export const userDetail = (req, res) => res.render(`${BaseDir}/detail`, { pageTitle: 'Profile' });
export const userEdit = (req, res) => res.render(`${BaseDir}/edit`, { pageTitle: 'Edit Profile' });
export const userChangePassword = (req, res) => res.render(`${BaseDir}/changePassword`, { pageTitle: 'Change Password' });
