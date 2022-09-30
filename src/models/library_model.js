const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    book: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    }, 

    year: {
        type: Number,
        required: true
    }

})

const Library = mongoose.model('library', DataSchema)
module.exports = Library