const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const mongoosePaginate = require('mongoose-paginate-v2');

const Boards = new Schema({
    seq: {
        type : Number,
    },
    title: {
        type : String,
        required : true
    },
    contents:{
        type: String,
        required : true
    },
    author:{
        type: String,
        required : true
    },
    authorid:{
        type: String,
        required : true
    },
    bNum:{
        type: Number,
        required : true
    },
    regTime:{
        type: Date,
        default: Date.now
    },
    views:{
        type: Number,
        default: 0
    },
},{
    versionKey: false 
}
);
Boards.plugin(autoIncrement.plugin,{
    model : 'Boards',
    field : 'seq',
    startAt : 1,
    increment : 1
})
Boards.plugin(mongoosePaginate);

Boards.statics.create = function(title, contents, author,authorid, bNum) {
    const board = new this({
        title,
        contents,
        author,
        authorid,
        bNum,
    })
    return board.save()
}

Boards.statics.delete = function(id) {
   Boards.deleteOne({_id:id});
}
module.exports = mongoose.model('Boards', Boards)