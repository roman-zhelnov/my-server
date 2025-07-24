import { Contact } from '../models/contactModel.js';

export const getAllContacts = async (ownerId) => {
  return await Contact.find(ownerId);
};

export const getContactById = async (id) => {
  return await Contact.findById(id);
};

export const createContact = async (contact) => {
  return await Contact.create(contact);
};

export const updateContact = async (id, contact) => {
  return await Contact.findByIdAndUpdate(id, contact, { new: true });
};

export const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};
