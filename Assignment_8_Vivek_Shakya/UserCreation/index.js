const mongoose = require('mongoose');
const express = require('express');
const boadyParser = require('body-parser');
const config = require('./config/database.config');

const app = express();
app.use(boadyParser.json());

app.get('/',(req,res)=>{
    res.json({'message':'Welcome'});
});



mongoose.connect(config.url,{
    useNewUrlParser : true
   
}).then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log("Error connecting to database");
});

require('./routes/app.route')(app);

app.listen('3000',()=>{
    console.log("Server Running");
});


