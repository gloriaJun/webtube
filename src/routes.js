const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';

/**
 * users
 */
const USERS = '/users';
const USER_DETAIL = '/:id';
const USER_EDIT = '/edit/profile';
const CHANGE_PASSWORD = '/edit/password';

/**
 * video
 */
const VIDEOS = '/videos';
const VIDEO_UPLOAD = '/upload';
const VIDEO_DETAIL = '/:id';
const VIDEO_EDIT = '/:id/edit';
const VIDEO_DELETE = '/:id/delete';


const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => id ? `/${id}` : USER_DETAIL,
  userEdit: USER_EDIT,
  userChangePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  videoUpload: VIDEO_UPLOAD,
  videoDetail: id => id ? `/${id}` : VIDEO_DETAIL,
  videoEdit: id => id ? `/${id}/edit` : VIDEO_EDIT,
  videoDelete: id => id ? `/${id}/delete` : VIDEO_DELETE,
};

export default routes;
