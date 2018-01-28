var express = require('express');
var cors = require('cors');
var mysql = require('mysql');

var app = express();

app.use(express.json());

app.use(express.static('./frontend'));
app.use('/assets', express.static('./assets'));
app.use(cors());

app.listen(5000, () => console.log('Running'));