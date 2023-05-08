import mongoose from 'mongoose';
import { Item } from './orderItem.model';

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Shipping',
    },
    orderItems: {
      type: [Item],
      require: true,
    },
    paymentMethod: {
      type: String,
      require: true,
    },
    subTotal: {
      type: Number,
      require: true,
    },
    total: {
      type: Number,
      require: true,
    },
    vat: {
      type: Number,
      require: true,
    },
    shippingPrice: {
      type: Number,
      require: true,
    },
    status: {
      type: String,
      require: true,
      default: 'Pending',
    },
    deliveredAt: Date,
    paidAt: Date,
  },
  { timestamps: true },
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
