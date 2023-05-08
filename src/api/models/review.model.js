import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    comment: String,
    rating: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true },
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
