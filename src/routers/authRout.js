import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  registerController,
  loginController,
  logoutController,
  refreshController,
  resetPasswordController,
} from '../controllers/authController.js';
import { validateBody } from '../middleware/validateBody.js';
import {
  loginSchema,
  registerSchema,
  resetPasswordSchema,
} from '../validation/auth.js';

const router = express.Router();
const jsonParser = express.json();

router.post(
  '/register',
  jsonParser,
  validateBody(registerSchema),
  ctrlWrapper(registerController),
);

router.post(
  '/login',
  jsonParser,
  validateBody(loginSchema),
  ctrlWrapper(loginController),
);

router.post('/logout', ctrlWrapper(logoutController));

router.post('/refresh', ctrlWrapper(refreshController));

router.post(
  '/req-reset-password',
  jsonParser,
  validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

export default router;
