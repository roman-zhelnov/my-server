import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
    },
    year: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ['mail', 'female'],
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Profile = mongoose.model('Profile', profileSchema);
