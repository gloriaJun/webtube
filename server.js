import app from './src/app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.APP_PORT;

app.listen(PORT, function () {
  console.log(`💡Listening on http://localhost:${PORT}`);
});
