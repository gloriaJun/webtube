import express from 'express';

const app = express();

const HOST = 'localhost';
const PORT = 3000;

/**
 * define router
 */
app.get('/', function (req, res) {
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
