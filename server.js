const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./Config/db');
const app = express();

connectDB();

app.use(express.json({extented: false}));
app.get('/',(req,res)=>{res.send("Running")});

app.use('/api/users', require('./Routes/api/users'));
app.use('/api/profile', require('./Routes/api/profile'));
app.use('/api/post', require('./Routes/api/post'));
app.use('/api/auth', require('./Routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Its running on the port");
})
