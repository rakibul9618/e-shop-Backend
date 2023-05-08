import express from 'express';
import { userLogIngHandler } from '../controller/auth.controller.js';

const authRouter = express.Router();

// USER SIGIN_IN
authRouter.post('/', userLogIngHandler);

export default authRouter;
