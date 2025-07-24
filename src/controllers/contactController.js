import createHttpError from 'http-errors';
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContact,
} from '../services/contactService.js';

export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts({ ownerId: req.user.id });
  res.send({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res) => {
  const { id } = req.params;
  const contact = await getContactById(id);
  if (contact === null) {
    throw new createHttpError[404]('Contact not found!');
  }

  if (contact.ownerId.toString() !== req.user.id.toString()) {
    throw new createHttpError[404]('Contact not found!');
  }

  res.send({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const contact = {
    name: req.body.name,
    phoneNumbers: req.body.phoneNumbers,
    email: req.body.email,
    isFavourite: req.body.isFavourite,
    ownerId: req.user.id,
  };
  const result = await createContact(contact);
  res.status(201).send({
    status: 201,
    message: 'Successfully created a contact!',
    data: result,
  });
};

export const updateContactController = async (req, res) => {
  const { id } = req.params;
  const contact = {
    name: req.body.name,
    phoneNumbers: req.body.phoneNumbers,
    email: req.body.email,
    isFavourite: req.body.isFavourite,
  };

  const result = await updateContact(id, contact);

  if (result === null) {
    throw new createHttpError[404]('Contact not found');
  }

  res.status(200).send({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result,
  });
};

export const deleteContactController = async (req, res) => {
  const { id } = req.params;
  const result = await deleteContact(id);

  if (result === null) {
    throw new createHttpError[404]('Contact not found');
  }

  res.status(202).send({ message: 'Successfully delete a contact!' });
};
