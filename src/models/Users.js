import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Users = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
});

Users.plugin(passportLocalMongoose, { usernameField: 'email' });

const model = mongoose.model('Users', Users);

export default model;
