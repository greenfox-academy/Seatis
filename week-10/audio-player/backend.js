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
  database: 'audioplayer'
});

connection.connect();


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/frontend/index.html');
});


app.get('/playlists', function(req, res) {
  let data = [];
  connection.query('SELECT * from playlists', function(err, result, fileds) {
      result.forEach(function(element){
        data.push(element)
      });
      res.send({'playlists': data});
  });
});


app.get('/test', function(request, response) {
  response.json("Hello world, I am a test!");
});


// bodyba: { "playlist": "MyMusic_2017"}
// header 2
app.post('/playlists', function (req, res) {
  // console.log(req.body);
  var queryString = 'INSERT INTO playlists (playlist) VALUES ("' + req.body.playlist + '")';
  var queryCheck = 'SELECT * from playlists';
  connection.query(queryString, function(err, result, fileds) {
    if (err) throw err;
  });
  connection.query(queryCheck, function(err, result, fileds) {
    if (err) throw err;
    let data = [];
    result.forEach(function(element){
      data.push(element)
    });
    res.json({'playlists': data});
  });
});

// bodyba: nothing
// header 2
app.delete('/playlists/:myID', function (req, res) {
  console.log(req.params.myID);
  var queryID = 'SELECT id from playlists';
  connection.query(queryID, function(err, result, fileds) {
    if (err) throw err;
    let ids = [];
    result.forEach(function(element){
      ids.push(element.id)
    });
    if (include(ids, Number(req.params.myID))) {
      var queryString = 'DELETE FROM playlists WHERE id=' + req.params.myID + ' AND system=0';
      var queryCheck = 'SELECT * from playlists';
      connection.query(queryString, function(err, result, fileds) {
        if (err) throw err;
      });
      connection.query(queryCheck, function(err, result, fileds) {
        if (err) throw err;
        let data = [];
        result.forEach(function(element){
          data.push(element)
        });
        res.json({'playlists': data});
      });
    } else {
      res.json('ERROR: id is not exist!');
    }
  });
});

function include(arr, obj) {
  for(var i=0; i<arr.length; i++) {
      if (arr[i] == obj) return true;
  }
  return false;
}

app.get('/playlist-tracks', function(req, res) {
  let data = [];
  connection.query('SELECT * from tracks', function(err, result, fileds) {
      result.forEach(function(element){
        data.push(element)
      });
      res.send({'tracks': data});
  });
});

app.get('/playlist-tracks/:playlist_id', function(req, res) {
  let data = [];
  connection.query('SELECT * from tracks WHERE playlist_id=' + req.params.playlist_id, function(err, result, fileds) {
      result.forEach(function(element){
        data.push(element)
      });
      res.send({'tracks': data});
  });
});

app.post('/playlist-tracks/:track_id/:playlist_id', function (req, res) {
  // console.log(req.body);
  var queryModify = 'UPDATE tracks SET playlist_id="' + req.params.playlist_id + '" where id=' + req.params.track_id;
  var queryCheck = 'SELECT * from tracks where id=' + req.params.track_id;
  connection.query(queryModify, function(err, result, fileds) {
    if (err) throw err;
  });
  connection.query(queryCheck, function(err, result, fileds) {
    if (err) throw err;
    let data = [];
    result.forEach(function(element){
      data.push(element)
    });
    res.json({'track': data});
  });
});

app.delete('/playlist-tracks/:track_id', function (req, res) {
  var queryID = 'SELECT id from tracks';
  connection.query(queryID, function(err, result, fileds) {
    if (err) throw err;
    let ids = [];
    result.forEach(function(element){
      ids.push(element.id)
    });
    if (include(ids, Number(req.params.track_id))) {
      var queryString = 'UPDATE tracks SET playlist_id=0 where id=' + req.params.track_id;
      var queryCheck = 'SELECT * from tracks WHERE id=' + req.params.track_id;
      connection.query(queryString, function(err, result, fileds) {
        if (err) throw err;
      });
      connection.query(queryCheck, function(err, result, fileds) {
        if (err) throw err;
        let data = [];
        result.forEach(function(element){
          data.push(element)
        });
        res.json({'tracks': data});
      });
    } else {
      res.json('ERROR: id is not exist!');
    }
  });
});

app.listen(8080, () => console.log('Running'));