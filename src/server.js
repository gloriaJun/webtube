import dotenv from 'dotenv';
import app from './app';

/**
 * database
 */
import './db';

/**
 * import models
 */
import './models/Videos';
import './models/Comment';
import './models/Users';

dotenv.config();

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`💡Listening on http://localhost:${PORT}`);
});
