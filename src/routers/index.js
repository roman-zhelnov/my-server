import express from 'express';
import contactRouter from './contactRout.js';
import authRouter from './authRout.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/contacts', auth, contactRouter);

export default router;
