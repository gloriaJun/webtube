import express from 'express';

const videoRouter = express.Router();

videoRouter.get('/', (req, res) => res.send('user index page'));
videoRouter.get('/edit', (req, res) => res.send('user edit page'));
videoRouter.get('/password', (req, res) => res.send('user password page'));

export default videoRouter;
