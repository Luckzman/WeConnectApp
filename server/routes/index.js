import express from 'express';
import businessRouter from '../routes/business';
import userRouter from '../routes/user';

const Router = express.Router();
Router.use('/api/v1/business', businessRouter);
Router.use('/api/v1/auth', userRouter);

export default Router;