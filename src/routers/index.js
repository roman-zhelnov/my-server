import express from 'express';
import contactRouter from './contactRout.js';

const router = express.Router();

router.use('/auth');
router.use('/contacts', contactRouter);

export default router;
