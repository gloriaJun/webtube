import express from 'express';

const globalRouter = express.Router();

globalRouter.get('/', (req, res) => res.send('user index page'));
globalRouter.get('/edit', (req, res) => res.send('user edit page'));
globalRouter.get('/password', (req, res) => res.send('user password page'));

export default globalRouter;
