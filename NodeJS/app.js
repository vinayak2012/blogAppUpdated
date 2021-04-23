const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles'); 

mongoose.connect('mongodb://localhost/blogData', { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false });


var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/articles', articleRouter);