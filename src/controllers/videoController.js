import routes from '../routes';
import Video from '../models/Videos';

const BaseDir = 'videos';

function searchVideo(keyword = '') {
  const params = !keyword
    ? {}
    : {
        title: {
          $regex: keyword,
          $options: 'i',
        },
      };
  return Video.find(params).sort({ _id: -1 });
}

export const home = async (req, res) => {
  let videos = [];

  try {
    videos = await searchVideo();
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

export const search = async (req, res) => {
  const {
    query: { keyword },
  } = req;
  let videos = [];

  try {
    videos = await searchVideo(keyword);
  } catch (e) {
    console.log(e);
    res.status(500);
  } finally {
    res.render(`${BaseDir}/search`, {
      pageTitle: 'Home',
      keyword,
      videos,
    });
  }
};

export const upload = async (req, res) => {
  if (req.method === 'GET') {
    res.render(`${BaseDir}/upload`, { pageTitle: 'Upload Video' });
  } else {
    const {
      body: { title, description },
      file: { path },
    } = req;

    const newVideo = await Video.create({
      fileUrl: path,
      title,
      description,
    });

    res.redirect(`${routes.videos}${routes.videoDetail(newVideo.id)}`);
  }
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);
    res.render(`${BaseDir}/detail`, {
      pageTitle: `Detail Video: ${video.title}`,
      video,
    });
  } catch (e) {
    console.log(`Not Found - ${id}`);
    res.redirect(routes.home);
  }
};

export const videoEdit = async (req, res) => {
  if (req.method === 'GET') {
    const {
      params: { id },
    } = req;

    try {
      const video = await Video.findById(id);
      res.render(`${BaseDir}/edit`, {
        pageTitle: `Edit Video: ${video.title}`,
        video,
      });
    } catch (e) {
      console.log(`Not Found - ${id}`);
      res.redirect(routes.home);
    }
  } else {
    const {
      params: { id },
    } = req;

    const { title, description } = req.body;

    try {
      const updateVideo = await Video.findOneAndUpdate(
        {
          _id: id,
        },
        {
          title,
          description,
        },
      );
      res.redirect(`${routes.videos}${routes.videoDetail(updateVideo.id)}`);
    } catch (e) {
      console.log(`An Error Occurred when updated - ${id}`);
      res.redirect(routes.home);
    }
  }
};

export const videoDelete = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    await Video.findOneAndDelete({ _id: id });
    res.redirect(routes.home);
  } catch (e) {
    console.log(`An Error Occurred when delete - ${id}`);
    res.redirect(routes.home);
  }
};
