const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const Comments = new Schema({
    parent: {
        type : Number,
        required : true
    },
    author:{
        type: String,
        required : true
    },
    contents:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    },
    regTime:{
        type: Date,
        default: Date.now
    }
},{
    versionKey: false 
}
);
Comments.plugin(mongoosePaginate);

Comments.statics.create = function(parent, author, contents,password) {
    const comment = new this({
        parent,
        author,
        contents,
        password
    })
    return comment.save()
}

Comments.statics.delete = function(id) {
    Comments.deleteOne({_id:id});
}
module.exports = mongoose.model('Comments', Comments)