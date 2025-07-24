import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumbers: [
      {
        number: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          enum: ['work', 'home', 'personal'],
          default: 'personal',
        },
      },
    ],
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Contact = mongoose.model('Contact', contactSchema);
