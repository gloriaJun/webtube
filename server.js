import app from './src/app';

const HOST = 'localhost';
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`💡Listening on http://${HOST}:${PORT}`);
});
