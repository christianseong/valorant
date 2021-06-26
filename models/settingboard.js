const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const settingBoards = new Schema({
    contents:{
        type: String,
        required : true
    },
},{
    versionKey: false 
}
);

settingBoards.statics.create = function(contents) {
    const settingboard = new this({
        contents
    })
    return settingboard.save()
}

settingBoards.statics.delete = function(id) {
    settingBoards.deleteOne({_id:id});
}
module.exports = mongoose.model('settingBoards', settingBoards)