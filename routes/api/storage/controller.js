const AWS = require('aws-sdk');
const fs = require('fs');
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = 'gTz18PMf0zACljtTdg7Z';
const secret_key = 'jGe4vBybbOKaMOBBsW0MgCsmz8W1IDaPtK3r8zdm';
const jwt = require('jsonwebtoken')




exports.upload = (req, res) => {
    const token = req.session.token;
    // const { path } = req.body;
    // console.log(req);
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
            const S3 = new AWS.S3({
                endpoint: endpoint,
                region: region,
                credentials: {
                    accessKeyId : access_key,
                    secretAccessKey: secret_key
                }
            });
            const bucket_name = 'alldayfootball';
            const local_file_path = '/test/test.png';
            (async () => {
            
                let object_name = 'img/';
                // create folder
                await S3.putObject({
                    Bucket: bucket_name,
                    Key: object_name
                }).promise();
            
                object_name = 'img/sample-object.png';
            
                // upload file
                await S3.putObject({
                    Bucket: bucket_name,
                    Key: object_name,
                    ACL: 'public-read',
                    // ACL을 지우면 전체공개가 되지 않습니다.
                    Body: fs.createReadStream(local_file_path)
                }).promise();
            
            })();
            var resp = {path:'https://kr.object.ncloudstorage.com/alldayfootball/'+object_name};
            console.log(resp);
            res.send('hi');
        }
        else res.send('not_admin')
    }).catch(onError)
}

exports.uploadtest =  (req, res) => {
    console.log(req);
    
    const S3 = new AWS.S3({
        endpoint: endpoint,
        region: region,
        credentials: {
            accessKeyId : access_key,
            secretAccessKey: secret_key
        }
    });
    const bucket_name = 'alldayfootball';
    // const MAX_KEYS = 100;
    const local_file_path = '/test/test.png';
    var params = {
        Bucket: bucket_name,
        // MaxKeys: MAX_KEYS
    };
    params.Delimiter = '/img';
    (async () => {
        let a = 0;
        var regex = /[^0-9]/g;
        while(true) {

            let response = await S3.listObjectsV2(params).promise();
            if(response.IsTruncated) {
                params.Marker = response.NextMarker;
            } else {
                for(let i=1; i<response.Contents.length; i++) {
                    if(parseInt(response.Contents[i].Key.replace(regex,"")) === a){
                        a++;
                    }
                }
                break;
            }
    
        }
        
        let object_name = 'img/';
        // create folder
        await S3.putObject({
            Bucket: bucket_name,
            Key: object_name
        }).promise();
    
        object_name = `img/${a}.png`;
    
        // upload file
        await S3.putObject({
            Bucket: bucket_name,
            Key: object_name,
            ACL: 'public-read',
            // ACL을 지우면 전체공개가 되지 않습니다.
            Body: fs.createReadStream(local_file_path)
        }).promise();
        var resp = {path:'https://kr.object.ncloudstorage.com/alldayfootball/'+object_name};
        res.json(resp);
    })();
}