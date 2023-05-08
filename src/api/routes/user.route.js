import express from 'express';
import { registerUserHandler } from '../controller/user.controller.js';

const userRouter = express.Router();

// CREATE USER
userRouter.post('/', registerUserHandler);

export default userRouter;
