var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//
var fs = require('fs');
var history = require('connect-history-api-fallback');
var session = require('express-session');
var mongoose = require('mongoose');
const config = require('./config');
var cors = require('cors');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//
var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  key:'sid',
  secret: config.secret,
  resave: false,
  saveUninitialized:true,
  // cookie:{
  //   maxAge: 1000 * 60 * 60
  // }
}));
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(
    "User-agent: *\nDisallow: /admin/\nDisallow: /login/\n"
  );
});
app.get("/articleView", (req, res,next) => {
  // console.log(req.query.num);
  const Board = require('./models/board')
  var thumb = "";
  var pretext = "";
  const pathToIndex = path.join(__dirname,'press','dist/index.html')
  Board.findOne({seq:req.query.num},function(err, board){
    if(err) return console.log(err);
    if(board.contents.includes('<img')){
    var tagIndex = board.contents.indexOf('<img');
    var tagSrcIndex = board.contents.indexOf('src="',tagIndex+4);
    var tagEndIndex = board.contents.indexOf('"',tagSrcIndex+5);
    thumb = board.contents.slice(tagSrcIndex+5,tagEndIndex);
    }
    pretext = board.contents.replace(/(<([^>]+)>|&nbsp;)/ig," ").slice(0,100)+('...');
    const raw = fs.readFileSync(pathToIndex)
    // console.log(raw.toString());
    const pageTitle = board.title;
    const updated = raw.toString()
    .replace("http://alldayfootball.co.kr/img/ogimg.png",thumb)
    .replace("스포츠, 그 이상의 가치 올데이풋볼이 함께합니다. AllDayFootBall",pageTitle)
    res.send(updated);
  })
});
// app.get("/", (req, res,next) => {
//   const pathToIndex = path.join(__dirname,'press','dist/index.html')
//   const raw = fs.readFileSync(pathToIndex)
//   const updated = raw.toString().replace("__PAGE_META__", `<meta property="og:image" content="http://alldayfootball.co.kr/img/ogimg.png">
//   <meta property="og:title" content="올데이풋볼">`)
//   res.send(updated);
// });

app.use('/api', require('./routes/api'))
app.use(history());
app.set('jwt-secret', config.secret)
mongoose.connect(config.mongodbUri,{
  useNewUrlParser : true,
  useCreateIndex : true,
  useUnifiedTopology:true,
  }).then(()=>{
    // console.log('몽고디비 연결성공')
  })
  .catch((err)=>{
    console.log(err);
  });
  app.use(express.static(path.join(__dirname,'press','dist')));
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
