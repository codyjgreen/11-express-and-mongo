'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shimmy = require('./api/wuapi');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// const wuRoutes = require('./routes/tigerStyle');

app.use(bodyParser.json());

app.use('/api/theWu', shimmy);



let PORT =process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log('http://localhost:' + PORT);
});