import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import path from 'path';

// import middleware
import { localsMiddleware } from './middlewares';

// import router configuration
import routes from './routes';
import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';

const app = express();


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
app.use(morgan('tiny'));

/**
 * set template engine
 */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/uploads', express.static("uploads"));

// 클라이언트에서 사용할 변수 값들을 정의해서 response 객체에 담아 전달한다
app.use(localsMiddleware);

/**
 * define router
 */
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;
