const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const Config = new Schema({
    info:{
        type: Object,
        required : true
    },
},{
    versionKey: false 
}
);

Config.statics.create = function(info) {
    const config = new this({
        info
    })
    return config.save()
}

Config.statics.delete = function(id) {
    Config.deleteOne({_id:id});
}
module.exports = mongoose.model('Config', Config)