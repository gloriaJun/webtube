import app from './src/app';
import dotenv from 'dotenv';

/**
 * import models
 */
import './src/models/Videos';
import './src/models/Comment';

dotenv.config();

const PORT = process.env.APP_PORT;

app.listen(PORT, function () {
  console.log(`💡Listening on http://localhost:${PORT}`);
});
