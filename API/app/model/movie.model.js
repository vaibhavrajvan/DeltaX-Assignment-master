const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: String,
    year: Number,
    plot: String,
    cast: Number,
    poster: String,
    type: String
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('Movie', movieSchema, 'Movies');