const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TaskSchema = new Schema({
    id: {
        type: Number, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: false
    },
    complete: {
        type: Boolean, 
        required: false
    }
})

module.exports = mongoose.model("Tasks",TaskSchema)