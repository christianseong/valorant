const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    author : {
        type:String,
        required:true
    },
    contents:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    },
    like:{
        type:Number
    }
});

const Board = mongoose.model("Board",BoardSchema);
module.exports = Board;