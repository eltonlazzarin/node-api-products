// importing the libraries
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require("cors");
const bodyParser = require("body-parser");

// assigning the express in the app variable and starting the app
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// sending data to the application in JSON format
app.use(express.json());

// freeing all external domains to access our API - https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

// connection to mongoDB cloud we imported from cluster
mongoose.connect('mongodb+srv://<user>:<password>@cluster0-q8v9x.mongodb.net/COLLECTION_NAME?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

requireDir('./src/models'); 

// Invalid End Point! (need to access htpp://localhost:3002/api)
app.get("/", function(req, res){
    res.send({ message: "End Point Inválido!" });
  });

// message accessing the correct route
app.get("/api", function(req, res){
    res.send({ "message":"Welcome to Product API app "});
});

// when accessing the correct route
app.use("/api", require("./src/routes"));

// setting the server port
let port = 3002;
app.listen(process.env.PORT || port, () =>{
   console.log('Server is running on port: '+ port);
});
