import mongoose from 'mongoose';

const user = process.env.MONGODB_USER;
const pass = process.env.MONGODB_PASSWORD;
const url = process.env.MONGODB_URL;
const name = process.env.MONGODB_DB;

const DB_URL = `mongodb+srv://${user}:${pass}@${url}/?retryWrites=true&w=majority&appName=${name}`;

export const initMongoConnection = async () => {
  await mongoose.connect(DB_URL);
};
