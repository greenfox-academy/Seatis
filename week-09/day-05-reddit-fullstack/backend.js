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

connection.connect(function(err) {
  if(err){
    console.log("Error connecting to Db!");
    return;
  }
  console.log("Connection established.");
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


connection.end();
app.listen(5000, () => console.log('Running'));