import { videos } from '../db';

const BaseDir = 'videos';

export const home = (req, res) => {
  res.render('home', {
    pageTitle: 'Home',
    videos,
  });
};

export const search = (req, res) => {
  const { query: { keyword } } = req;

  res.render(`${BaseDir}/search`, {
    pageTitle: 'Home',
    keyword,
  });
}
export const upload = (req, res) => res.render(`${BaseDir}/upload`, { pageTitle: 'Upload Video' });
export const videoDetail = (req, res) => res.render(`${BaseDir}/detail`, { pageTitle: 'Detail Video' });
export const videoEdit = (req, res) => res.render(`${BaseDir}/edit`, { pageTitle: 'Edit Video' });
export const videoDelete = (req, res) => res.render(`${BaseDir}/delete`, { pageTitle: 'Delete Video' });
