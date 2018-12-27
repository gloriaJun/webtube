import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

// import router configuration
import routes from './routes';
import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';

const app = express();


/**
 * middleware
 */
app.use(cookieParser());
// Express v4.16.0 기준으로는 body-parser를 별도로 설치하지 않고 아래와 같이 설정해도 됨
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// for security
app.use(helmet());
// for logging
app.use(morgan('tiny'));


/**
 * define router
 */
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;
