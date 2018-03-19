import express from 'express';
import userController from '../controllers/user';
import userValidator from '../validator/userValidator';

const userRouter = express.Router();

userRouter.post('/signup', userValidator.signUp, userController.SignUp);

userRouter.post('/signin', userValidator.signIn, userController.SignIn);

export default userRouter;
