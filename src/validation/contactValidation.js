import Joi from 'joi';

const phoneNumberSchema = Joi.object({
  number: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(3)
    .max(20)
    .required(),
  type: Joi.string()
    .valid('work', 'home', 'personal')
    .optional()
    .default('personal'),
});

export const contactSchemaForValid = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.array().items(phoneNumberSchema).min(1).required(),
  email: Joi.string().email().min(3).max(50),
  isFavourite: Joi.boolean(),
});

export const replaceContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.array().items(phoneNumberSchema).min(1),
  email: Joi.string().email().min(3).max(20),
  isFavourite: Joi.boolean(),
});
