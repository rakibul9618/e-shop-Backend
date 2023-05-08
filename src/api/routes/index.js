import express from 'express';
import user from './user.route.js';
import auth from './auth.route.js';

const router = express.Router();

router.use('/api/v1/user', user);
router.use('/api/v1/auth', auth);

export default router;
