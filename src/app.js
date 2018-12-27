import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

// import router configuration
import globalRouter from './routes/globalRouter';
import userRouter from './routes/userRouter';
import videoRouter from './routes/videoRouter';

const app = express();


/**
 * middleware
 */
app.use(morgan('tiny'));
app.use(helmet());
// Express v4.16.0 기준으로는 body-parser를 별도로 설치하지 않고 아래와 같이 설정해도 됨
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


/**
 * define router
 */
app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);


export default app;
