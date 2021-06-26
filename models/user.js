  
const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto')
const config = require('../config')


const Users = new Schema({
    id: {
        type : String,
        required : true
    },
    password:{
        type: String,
        required : true
    },
    name: {
        type : String,
        required : true
    },
    photo: {
        type: String
    },
    email: {
        type: String
    },
    superAdmin: {
        type: Boolean, 
        default: false,
    },
    admin: {
        type: Boolean, 
        default: false,
    },
    regTime:{
        type: Date,
        default: Date.now
    },
},{
    versionKey: false 
}
);

Users.statics.create = function(id, name, photo,email, password ) {
    const encrypted = crypto.createHmac('sha1', config.secret)
                      .update(password)
                      .digest('base64')

    const user = new this({
        id,
        name,
        photo,
        email,
        password: encrypted
    })

    return user.save()
}

Users.statics.findOneById = function(id) {
    return this.findOne({
        id
    }).exec()
}


Users.methods.verify = function(password) {
    const encrypted = crypto.createHmac('sha1', config.secret)
                      .update(password)
                      .digest('base64')

    return this.password === encrypted
}

Users.methods.assignAdmin = function() {
    this.admin = true
    return this.save()
}

Users.methods.assignSuperAdmin = function() {
    this.superAdmin = true
    return this.save()
}

module.exports = mongoose.model('Users', Users)