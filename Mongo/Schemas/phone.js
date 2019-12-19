const mongoDb = require('mongoose');

let phoneSchema = new mongoDb.Schema({
    Marca: {
        type: String,
        required: [true, 'the company model is required']
    },
    Modelo: {
        type: String,
        required: [true, 'the model is required']
    },
    Ram: {
        type: Number,
        required: false
    },
    AndroidVersion: {
        type: Number,
        required: false,
        default: 7
    }
},
{collection: 'phone', versionKey: false});

module.exports = mongoDb.model('phone', phoneSchema);
