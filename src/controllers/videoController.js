import routes from '../routes';
import Video from '../models/Videos';

const BaseDir = 'videos';

export const home = async (req, res) => {
  let videos = [];

  try {
    // get video list from db
    videos = await Video.find({});
    console.log(videos);
  } catch (e) {
    console.log(e);
    res.status(500);
  } finally {
    res.render('home', {
      pageTitle: 'Home',
      videos,
    });
  }
};

export const search = (req, res) => {
  const { query: { keyword } } = req;

  res.render(`${BaseDir}/search`, {
    pageTitle: 'Home',
    keyword,
    // videos,
  });
}

export const upload = (req, res) => {
  if (req.method === 'GET') {
    res.render(`${BaseDir}/upload`, { pageTitle: 'Upload Video' });
  } else {
    const {
      title,
      file,
      description,
    } = req.body;

    res.redirect(`${routes.videos}${routes.videoDetail(1212121)}`);
  }
}

export const videoDetail = (req, res) => res.render(`${BaseDir}/detail`, { pageTitle: 'Detail Video' });

export const videoEdit = (req, res) => {
  if (req.method === 'GET') {
    res.render(`${BaseDir}/edit`, { pageTitle: 'Edit Video' });
  } else {
    const {
      title,
      file,
      description,
    } = req.body;

    res.redirect(`${routes.videos}${routes.videoDetail(1212121)}`);
  }
}

export const videoDelete = (req, res) => res.render(`${BaseDir}/delete`, { pageTitle: 'Delete Video' });
