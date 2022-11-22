const  mongoose = require('mongoose')

const Schema = mongoose.Schema;

const notesSchema = new Schema({
    code:{
        type:Number,
        required:true
    },
    username: {
        type:String,
        required: false,
        default: "anonymous"
    },
    text:{
        type:String,
        require:true,
        default:"title missing"
    },
    description: {
        type: String,
        required:true,
        default: "cannot get description"
    }
})

const Note = new mongoose.model('clip',notesSchema)

module.exports = Note