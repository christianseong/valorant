var express = require('express');
const mongoose = require('mongoose');
const Board = require('./models/boards');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://junhoo:junhoo97@cluster0.xztkb.mongodb.net/junhoodb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("연결성공");
  })
  .catch((err) => {
    console.log(err);
  }
);
app.use(cors());
app.use(express.json());


app.get('/getboard', function(req,res){
    Board.find(function(err, boards){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(boards);
    })
  });

  app.listen(port, () => {
    console.log("Server is up on port " + port);
  });

  app.listen(4500);