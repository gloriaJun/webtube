import mongoose from 'mongoose';
import dotenv from 'dotenv';

// load env configuration
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
);

const db = mongoose.connection;

db.once('open', () => {
  console.log('💡db connect success !!');
});

db.on('error', error => {
  console.log('⁉️db connect failed', error);
});
