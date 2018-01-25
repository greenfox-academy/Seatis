'use strict'

var express = require('express');
var cors = require('cors');
var mysql = require('mysql');

var app = express();

app.use(express.json());

app.use(express.static('./frontend'));
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
  res.sendFile(__dirname + '/frontend/index.html');
});

app.get('/books', function(req, res) {
  var data = [];
  if (req.query.category) {
    var queryString = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
    FROM book_mast INNER JOIN author ON book_mast.aut_id=author.aut_id 
    INNER JOIN category ON book_mast.cate_id=category.cate_id 
    INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id 
    WHERE cate_descrip='${req.query.category}'`;
  } else {
  var queryString = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
                     FROM book_mast INNER JOIN author ON book_mast.aut_id=author.aut_id 
                     INNER JOIN category ON book_mast.cate_id=category.cate_id 
                     INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id`;
  }
  connection.query(queryString, function(err, result, fileds) {
      result.forEach(function(element){
        data.push({'title': element.book_name, 'author': element.aut_name, 'category': element.cate_descrip, 'publisher': element.pub_name, 'price': element.book_price})
      });
      res.send({'books': data});
  });
});