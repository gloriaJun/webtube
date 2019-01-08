import passport from 'passport';
import Users from './models/Users';

passport.use(Users.createStrategy());

passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());
