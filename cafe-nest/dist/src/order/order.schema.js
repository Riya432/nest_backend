"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose = require("mongoose");
exports.OrderSchema = new mongoose.Schema({
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
}, { timestamps: true });
//# sourceMappingURL=order.schema.js.map