import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.send('user index page'));
userRouter.get('/edit', (req, res) => res.send('user edit page'));
userRouter.get('/password', (req, res) => res.send('user password page'));

export default userRouter;
