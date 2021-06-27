const settingBoard = require('../../../models/settingboard')
const jwt = require('jsonwebtoken')


exports.write = (req, res) => {
    const {contents} = req.body
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
            settingBoard.create(contents)
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
    const {id , contents} = req.body
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
            settingBoard.findOneAndUpdate({_id:id,},{$set:{contents:contents}})
            .then(()=>{
                res.send('updated');
            })
        }
        else res.send('not_admin')
    }).catch(onError)
}

exports.find = (req, res) => {
    settingBoard.find(function(err, board){
        if(err) return res.send(err);
        res.json(board);
    })
}

exports.findone = (req, res) => {
    const { id } = req.body;
    settingBoard.findOne({_id:id},function(err, board){
        if(err) return res.send(err);
        res.json(board);
    })
}
