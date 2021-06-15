var express = require('express');
var router = express.Router();
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//
const controller = require('./controller')
const path = require("path");
const AWS = require('aws-sdk');
const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = 'gTz18PMf0zACljtTdg7Z';
const secret_key = 'jGe4vBybbOKaMOBBsW0MgCsmz8W1IDaPtK3r8zdm';
let multer = require("multer");
let multerS3 = require('multer-s3');
const S3 = new AWS.S3({
    endpoint: endpoint,
    region: region,
    credentials: {
        accessKeyId : access_key,
        secretAccessKey: secret_key
    }
});
const upload = multer({
    storage: multerS3({
        s3: S3,
        bucket: "alldayfootball", // 버킷 이름
        contentType: multerS3.AUTO_CONTENT_TYPE, // 자동을 콘텐츠 타입 세팅
        acl: 'public-read', // 클라이언트에서 자유롭게 가용하기 위함
        key: (req, file, cb) => {
            console.log(file);
            cb(null,"img/"+new Date().valueOf() +file.originalname)
        },
    }),
});
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//

router.post('/upload',controller.upload)
router.post('/uploadtest',controller.uploadtest)


router.post('/test', upload.single('files'), (req, res) => {
    try {
        console.log("req.file: ", req.file); // 테스트 => req.file.location에 이미지 링크(s3-server)가 담겨있음 

        let payLoad = { path: req.file.location };
        res.send(payLoad);
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;
