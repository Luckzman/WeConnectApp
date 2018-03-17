import express from 'express';
import userValidator from '../validator/userValidator';
import userController from '../controllers/user';


const userRouter = express.Router();
userRouter.post('/signup', userValidator.signUp, userController.userSignUp);

userRouter.post('/signin', userValidator.signIn, userController.userSignIn);

export default userRouter;
