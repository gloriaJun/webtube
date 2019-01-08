import path from 'path';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';

// import middleware
import { localsMiddleware } from './middlewares';

// import router configuration
import routes from './routes';
import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';

import './passport';

const app = express();
const CookieStore = MongoStore(session);

/**
 * set template engine
 */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/uploads', express.static('uploads'));
app.use('/dist', express.static('dist'));

/**
 * middleware
 * --> Is important define order??
 */
// for security
app.use(helmet());
app.use(cookieParser());
// Express v4.16.0 기준으로는 body-parser를 별도로 설치하지 않고 아래와 같이 설정해도 됨
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// for logging
app.use(morgan('dev'));
// 생성된 세션의 정보를 브라우저의 cookie에 저장한다.
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    // 세션을 보존하기 위함
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// 클라이언트에서 사용할 변수 값들을 정의해서 response 객체에 담아 전달한다
app.use(localsMiddleware);

/**
 * define router
 */
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
