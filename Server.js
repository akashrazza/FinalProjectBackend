var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.json());

require('./Routes/credentials')(app);

app.listen(8000,()=>{
    console.log("Server Started")
})