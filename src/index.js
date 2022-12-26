const express = require('express');
const app = express();
require('dotenv').config();
const {dbConnection} = require('./config/db');

app.listen(process.env.PORT, ()=>{
    console.log(`se levanta mi API en el puerto ${process.env.PORT}`);
})

dbConnection();
//localhost:5000/booksmin41video
app.get('/', (req, res)=>{
    res.send("hola estas en mi api en home");
})
//localhost:5000/books
app.use('/books',require('./routers/books.routes'));