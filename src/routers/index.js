import express from 'express';
import contactRouter from './contactRout.js';
import authRouter from './authRout.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/contacts', contactRouter);

export default router;
