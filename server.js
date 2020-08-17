const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const id = require('uuid');

app.use(bodyParser());
app.use(cors());

app.get('/',(req,res) => {
    console.log("Got Request")
    res.send({status:200})
})

app.post('/upload',(req,res) => {


    var music = req.files.file;
    // var fileName = req.body.fileName;
    // Use the mv() method to place the file somewhere on your server

    
    const id = uuid.v4();


    music.mv('static/uploads/' + id + '.mp4' , function(err) {

        if(err){
            console.log(err);
        }
        else{
            // console.log("uploaded");
            res.send({type:'Uploaded',uuid:id})
            // console.log('Created')
        }
    });
})

app.listen(8000)
