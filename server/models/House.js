import mongoose from 'mongoose'
const Schema = mongoose.Schema


export const HouseSchema = new Schema({
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    address: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: Number, required: true, min: 1000 },
    description: { type: String, default: 'No Description Provided' },

}, { timestamps: true, toJSON: { virtuals: true } })