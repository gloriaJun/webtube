import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

const app = express();

const HOST = 'localhost';
const PORT = 3000;

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
app.get('/', function (req, res) {
  console.log(req.body);
  console.log('Cookies: ', req.cookies)
  console.log('Signed Cookies: ', req.signedCookies)
  res.send('This is Index Page !!');
});

app.get('/profile', function (req, res) {
  res.send('This is Profile Page');
})


/**
 * set port
 */
app.listen(PORT, function () {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
