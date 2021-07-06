const mongoose = require('mongoose');
const express = require('express');
const auth = require('./routes/auth');
const cors = require('cors');

//Creating our app
const app = express();

mongoose.connect('mongodb://localhost/medium', {useNewUrlParser : true, useUnifiedTopology : true})
.then(() => console.log("Database is connected..."))
    .catch(err => console.log("Database failed to connect ", err));


//Middlewares
app.use(express.json());
app.use(cors());

//Transporting to routes Middlewares
app.use('/api/auth', auth);

const port = process.env.PORT || 8080


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))