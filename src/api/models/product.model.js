import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
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
    category: {
      type: String,
      require: true,
    },
    subCategory: {
      type: String,
      require: true,
    },
    variantList: {
      require: true,
      default: Object,
      color: {
        type: [String],
        default: [],
      },
      size: {
        type: [String],
        default: [],
      },
      weight: {
        type: String,
        default: null,
      },
    },
    unit: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ['Active', 'InActive'],
    },
  },
  { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);

export default Product;
