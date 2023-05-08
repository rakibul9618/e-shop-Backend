import mongoose from 'mongoose';

export const Item = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    discountPrice: Number,
    discountPercent: Number,
    quantity: {
      type: Number,
      require: true,
    },
    images: {
      type: [String],
      require: true,
    },
    variantList: {
      require: true,
      default: Object,
      color: String,
      size: String,
      weight: String,
    },
    unit: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);
