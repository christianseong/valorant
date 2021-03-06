const express = require('express');
const mongoose = require('mongoose');

const Board = require('./models/board');

const cors = require('cors');



const app = express();

const port = process.env.PORT || 4500;

app.use(cors());

mongoose
  .connect("mongodb+srv://christian:christian@cluster0.5cnsr.mongodb.net/shoppingMall?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());

  app.get("/", async (req,res) =>{
    try{
        res.send("connect")
    }catch(err){
        console.log("error");
    }

});


app.post("/postboard", async (req, res) => {

    console.log(req.body);
    console.log(res);

    const board = new Board(req.body);
  
    try {
      await board.save();
      res.send({success:true});
      res.status(204).send();
      
    } catch (e) {
      res.status(500).json({
        message: "board 저장 실패",
      });
    }
  });

  app.get('/getboard', function(req,res){
    Board.find(function(err, boards){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(boards);
    })
  });

  
  app.listen(port, () => {
    console.log("Server is up on port " + port);
  });