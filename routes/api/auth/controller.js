const jwt = require('jsonwebtoken')
const User = require('../../../models/user')
const crypto = require('crypto')


exports.register = (req, res) => {
    const { id, name, photo, email, password, superAdmin } = req.body
    let newUser = null
    const token = req.session.token;
    if(!token) {
        return res.send('not_logged')
    }
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            })
        }
    )

    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        })
    }

    p.then((decoded)=>{
        if(decoded.superAdmin)
        {
            const create = (user) => {
                if(user) {
                    res.send("id_exists");
                } else {
                    return User.create(id, name, photo,email, password, superAdmin)
                }
            }
        
            const count = (user) => {
                newUser = user
                return User.count({}).exec()
            }
        
            const assign = (count) => {
                if(superAdmin) {
                    newUser.assignAdmin();
                    newUser.assignSuperAdmin();
                    return;
                } else {
                    return newUser.assignAdmin();
                }
            }
        
            const respond = () => {
                res.send('registered');
            }
        
            const onError = (error) => {
                res.status(409).json({
                    message: error.message
                })
            }

            User.findOneById(id)
            .then(create)
            .then(count)
            .then(assign)
            .then(respond)
            .catch(onError)
        }
        else res.send('not_admin')
    }).catch(onError)

    // User.findOneById(id)
    // .then(create)
    // .then(count)
    // .then(assign)
    // .then(respond)
    // .catch(onError)
}

exports.login = (req, res) => {
    const {id, password} = req.body
    const secret = req.app.get('jwt-secret')

    const check = (user) => {
        const token = req.session.token;
        if(token) {
            return res.send('already_logged_in');
        }
        if(!user) {
            return res.send('not_user');
        } else {
            if(user.verify(password)) {
                const p = new Promise((resolve, reject) => {
                    jwt.sign(
                        {
                            _id: user._id,
                            id: user.id,
                            name: user.name,
                            photo: user.photo,
                            email: user.email,
                            admin: user.admin,
                            superAdmin: user.superAdmin
                        }, 
                        secret, 
                        {
                            expiresIn: '7d',
                            // issuer: 'allground.net',
                            subject: 'userInfo'
                        }, (err, token) => {
                            if (err) reject(err)
                            resolve(token) 
                        })
                })
                return p
            } else {
                return res.send('not_password');
            }
        }
    }

    const respond = (token) => {
        req.session.token = token;
        // console.log(req.session);
        res.send('logged_in')
    }

    const onError = (error) => {
        res.status(403).json({
            message: error.message
        })
    }

    User.findOneById(id)
    .then(check)
    .then(respond)
    .catch(onError)

}

exports.check = (req, res) => {
    res.json({
        success: true,
        info: req.decoded
    })
}

exports.logout = (req, res) => {
    if(req.session){
        req.session.destroy((err)=>{
            if(err){
                // console.log(err);
            }
            else{
                res.send('logged_out');
            }
        })
    }
    else{
        res.send('not_logged');
    }
}

exports.find = (req, res) => {
    const token = req.session.token;
    if(!token) {
        return res.send('not_logged')
    }
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            })
        }
    )

    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        })
    }

    p.then((decoded)=>{
        if(decoded.admin)
        {
            User.find(function(err, user){
                if(err) return res.send(err);
                res.json(user);
            })
        }
        else res.send('not_admin')
    }).catch(onError)
}

exports.delete = (req ,res) => {
    const { id } = req.body
    const token = req.session.token;
    if(!token) {
        return res.send('not_logged')
    }
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            })
        }
    )

    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        })
    }

    p.then((decoded)=>{
        if(decoded.superAdmin)
        {
            const { id } = req.body
            User.deleteOne({id:id})
            .then(()=>{
                res.send('deleted');
            })
        }
        else res.send('not_admin')
    }).catch(onError)

}

exports.edit = (req, res) => {
    const {id , name , photo,email, password, superAdmin} = req.body
    const token = req.session.token;
    if(!token) {
        return res.send('not_logged')
    }
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            })
        }
    )

    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        })
    }

    p.then((decoded)=>{
        if(decoded.superAdmin)
        {
            var set = {name:name,superAdmin:superAdmin};
            if(password!='') set.password = password;
            if(photo!='') set.photo = photo;
            if(email!='') set.email = email;
            User.findOneAndUpdate({id:id,},{$set:set})
            .then(()=>{
                res.send('updated');
            })
            return;
        }
        else res.send('not_admin')
    }).catch(onError)


    // Board.findOneAndUpdate({_id:id,},{$set:{title:title,contents:contents}})
    // .then(()=>{
    //     res.send('updated');
    // })
}

exports.findone = (req, res) => {
    const { id } = req.body;
    User.findOne({_id:id},function(err, user){
        if(err) return res.send(err);
        res.send({name:user.name,email:user.email});
    })
}