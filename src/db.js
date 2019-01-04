import mongoose from 'mongoose';
import dotenv from 'dotenv';

// load env configuration
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
  },
);

const db = mongoose.connection;

db.once('open', () => {
  console.log('💡db connect success !!');
});

db.on('error', error => {
  console.log('⁉️db connect failed', error);
});

// db.close();
//
// export const videos = [];
// for (let i = 0; i < 10; i++) {
//   videos.push({
//     id: 1212121 + i,
//     title: `video${i+1}`,
//     description: 'this is description',
//     views: Math.floor((Math.random() * 100) + 1),
//     videoFile: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//     creator: {
//       id: 11111,
//       username: 'user01',
//       email: 'abc@test.com',
//     },
//   });
// }
