import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  updateContactController,
  getContactsController,
} from '../controllers/contactController.js';
import { isValidId } from '../middleware/isValidId.js';
import { validateBody } from '../middleware/validateBody.js';
import {
  contactSchemaForValid,
  replaceContactSchema,
} from '../validation/contactValidation.js';

const router = express.Router();
const jsonParser = express.json();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:id', isValidId, ctrlWrapper(getContactByIdController));

router.post(
  '/contacts',
  jsonParser,
  validateBody(contactSchemaForValid),
  ctrlWrapper(createContactController),
);

router.patch(
  '/contacts/:id',
  isValidId,
  jsonParser,
  validateBody(replaceContactSchema),
  ctrlWrapper(updateContactController),
);

router.delete('/contacts/:id', isValidId, ctrlWrapper(deleteContactController));

export default router;
