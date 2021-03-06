const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    title: {
        type: String, required: true
    },
    length: {
        type: Number, required: true
    },
    number: {
        type: Number, required: true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    }
});

const Track = mongoose.model('Track', TrackSchema);
module.exports = Track;