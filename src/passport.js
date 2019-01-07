import passport from 'passport';
import User from './models/Users';

passport.use(User.createStrategy());
