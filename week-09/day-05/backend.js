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
  database: 'reddit'
});

connection.connect();


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/frontend/index.html');
});


app.get('/posts', function(req, res) {
  let data = [];
  connection.query('SELECT * from posts', function(err, result, fileds) {
      result.forEach(function(element){
        data.push(element)
      });
      res.send({'posts': data});
      // res.send(data);
  });
});

app.get('/hello', function(request, response) {
  // response.json({'hello': 'bello'});
  response.json("Hello world!");
});

app.post('/posts', function (req, res) {
  console.log(req.body);
  var queryString = 'INSERT INTO posts (title, url) VALUES ("' + req.body.title + '", "' + req.body.url + '")';
  var queryCheck = 'SELECT * from posts WHERE title="' + req.body.title + '"';
  console.log(queryCheck);
  connection.query(queryString, function(err, result, fileds) {
    if (err) throw err;
  });
  connection.query(queryCheck, function(err, result, fileds) {
    if (err) throw err;
    res.json({
      "id": result[0].id,       // result has only one element!!
      "title": result[0].title,
      "url": result[0].url,
      "timestamp": result[0].timest,
      "score": result[0].score
    });
  });
  
});

app.put('/posts/:myID/upvote', function (req, res) {
  console.log(req.params.myID);
  var queryString = 'SELECT score from posts WHERE id=' + req.params.myID;
  
  connection.query(queryString, function(err, result, fileds) {
    if (err) throw err;
    var score = result[0].score;
    score++;
    var queryModify = 'UPDATE posts SET score="' + score + '" where id=' + req.params.myID;
    console.log(queryModify);
    connection.query(queryModify, function(err, result, fileds) {
      if (err) throw err;
    });
    console.log(typeof(result[0].score));
    res.json({"score": score});
  });
});

app.put('/posts/:myID/downvote', function (req, res) {
  console.log(req.params.myID);
  var queryString = 'SELECT score from posts WHERE id=' + req.params.myID;
  
  connection.query(queryString, function(err, result, fileds) {
    if (err) throw err;
    var score = result[0].score;
    score--;
    var queryModify = 'UPDATE posts SET score="' + score + '" where id=' + req.params.myID;
    console.log(queryModify);
    connection.query(queryModify, function(err, result, fileds) {
      if (err) throw err;
    });
    console.log(typeof(result[0].score));
    res.json({"score": score});
  });
});

app.listen(5000, () => console.log('Running'));