'use strict'

var express = require('express');
var cors = require('cors');
var mysql = require('mysql');

var app = express();

app.use('/assets', express.static('./assets'));
app.use(cors());

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'GR18pv',
  database: 'bookstore'
});

connection.connect();


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/assets/index.html');
});


app.get('/books', function(req, res) {
  let data = [];
  connection.query('SELECT book_name from book_mast', function(err, result, fileds) {
      result.forEach(function(element){
        data.push(element.book_name)
      });
      // res.send({'books': data});
      res.send(data);
  });
});

app.listen(4000, () => console.log('Running'));