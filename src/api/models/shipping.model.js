import mongoose from 'mongoose';

const shippingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
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
    division: {
      type: String,
      require: true,
    },
    district: {
      type: String,
      require: true,
    },
    area: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

const Shipping = mongoose.model('Shipping', shippingSchema);

export default Shipping;
