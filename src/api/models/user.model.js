import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    birthDate: {
      required: false,
      day: {
        type: String,
        required: true,
      },
      month: {
        type: String,
        required: true,
      },
      year: {
        type: String,
        required: true,
      },
    },
    address: {
      required: false,
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
    image: Object,
    gender: String,
    role: {
      type: String,
      enum: ['User', 'Admin'],
    },
    userType: {
      type: String,
      enum: ['Primary', 'Silver', 'Gold', 'Platinum'],
    },
    status: {
      type: String,
      enum: ['Active', 'InActive', 'Pending', 'Verified'],
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
