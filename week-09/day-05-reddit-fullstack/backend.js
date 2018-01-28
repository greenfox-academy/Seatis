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

app.get('/', function(request, response) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/posts', function(request, response) {
  let data = [];
  connection.query('SELECT * from posts', function(error, result) {
    if (error) {
      response.status(500).send(`Database error: ${error.toString()}`);
      return;
    }
    result.forEach(function(row){
      data.push(row)
    });
    response.send({'posts': data});
  });
});

app.post('/posts', function (request, response) {
  var queryString = `INSERT INTO posts (title, url, timestamp) VALUES ('${request.body.title}', '${request.body.url}', ${Date.now()})`;
  var queryCheck = `SELECT * from posts WHERE title='${request.body.title}'`;
  connection.query(queryString, function(error, result) {
    if (error) {
      response.status(500).send(`Database error: ${error.toString()}`);
      return;
    }
  });
  connection.query(queryCheck, function(error, result) {
    if (error) {
      response.status(500).send(`Database error: ${error.toString()}`);
      return;
    }
    response.send({
      "id": result[0].id,      
      "title": result[0].title,
      "url": result[0].url,
      "timestamp": result[0].timestamp,
      "score": result[0].score, 
      "owner": result[0].owner
    });
  });
  
});

// connection.end();
app.listen(5000, () => console.log('Running'));