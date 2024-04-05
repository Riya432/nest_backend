import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 100,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true },
);
