const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['flight', 'train', 'bus', 'metro'],
        required: true
    },
    provider: { type: String, required: true },
    source: { type: String, required: true },
    destination: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    duration: { type: String, required: true },
    cost: { type: Number, required: true },
    seatsAvailable: { type: Number, required: true },
    stops: { type: Number, default: 0 },
    amenities: { type: [String] },
    rating: { type: Number, min: 0, max: 5 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transport', transportSchema);