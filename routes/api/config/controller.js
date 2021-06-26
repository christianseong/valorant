const Config = require('../../../models/config')
const jwt = require('jsonwebtoken')


exports.write = (req, res) => {
    const {info} = req.body
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
            Config.create(info)
            .then(()=>{
                res.send('uploaded')
            })
        }
        else res.send('not_admin')
    }).catch(onError)
        // if(isAdmin)
        // {
        //     Board.create(title,contents)
        //     .then(()=>{
        //         res.send('uploaded')
        //     })
        // }
        // else res.send(req.session)
}

exports.edit = (req, res) => {
    const {id , info} = req.body
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
            Config.findOneAndUpdate({_id:id,},{$set:{info:info}})
            .then(()=>{
                res.send('updated');
            })
        }
        else res.send('not_admin')
    }).catch(onError)
}

exports.find = (req, res) => {
    Config.find(function(err, config){
        if(err) return res.send(err);
        res.json(config);
    })
}

exports.findone = (req, res) => {
    const { id } = req.body;
    Config.findOne({_id:id},function(err, config){
        if(err) return res.send(err);
        res.json(config);
    })
}
