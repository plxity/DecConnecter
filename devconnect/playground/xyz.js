const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Keys= require('../config/keys');
const uri = require('../config/db')

console.log(uri)

const url = process.env.NODE_ENV === 'production' ? uri.prod : uri.dev  

mongoose
  .connect(url)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));