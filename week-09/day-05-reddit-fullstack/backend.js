var express = require('express');
var cors = require('cors');
var mysql = require('mysql');

var app = express();

app.use(express.json());

app.use(express.static('./frontend'));
app.use('/assets', express.static('./assets'));
app.use(cors());

// const corsOptions = {
//   origin: 'http://localhost:5000',
//   allowedHeaders: ['Accept-Version', 'Authorization', 'Credentials', 'Content-Type', 'Username'],
//   exposedHeaders: ['X-Request-Id', 'Username'],
// }

// app.all('*', cors(corsOptions))

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

function resultMaker(result) {
  return {'status': 'OK', 'post': {
    "id": result[0].id,      
    "title": result[0].title,
    "url": result[0].url,
    "timestamp": result[0].timestamp,
    "score": result[0].score, 
    "owner": result[0].owner
  }};
}

app.get('/', function(request, response) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/posts', function(request, response) {
  let data = [];
  connection.query('SELECT * from posts', function(error, result) {
    if (error) {
      response.status(500).send({'status': 'error', 'error': `Database ${error.toString()}`});
      return;
    }
    result.forEach(function(row){
      data.push(row)
    });
    response.send({'status': 'OK', 'posts': data});
  });
});

app.post('/posts', function (request, response) {
  let queryString;
  if (request.headers['username']) {
    queryString = `INSERT INTO posts (title, url, timestamp, owner) VALUES ('${request.body.title}', '${request.body.url}', ${Date.now()}, '${request.headers['username']}')`
  } else {
    queryString = `INSERT INTO posts (title, url, timestamp) VALUES ('${request.body.title}', '${request.body.url}', ${Date.now()})`;
  }
  var queryCheck = `SELECT * from posts WHERE title='${request.body.title}'`;
  connection.query(queryString, function(error, result) {
    if (error) {
      response.status(500).send({'status': 'error', 'error': `Database ${error.toString()}`});
      return;
    }
  });
  connection.query(queryCheck, function(error, result) {
    if (error) {
      response.status(500).send({'status': 'error', 'error': `Database ${error.toString()}`});
      return;
    }
    response.send(resultMaker(result));
  });
});

app.put('/posts/:postID/upvote', function (request, response) {
  var queryString = 'UPDATE posts SET score = score + 1 WHERE id=' + request.params.postID;
  var queryCheck = `SELECT * from posts WHERE id='${request.params.postID}'`;
  connection.query(queryString, function(error, result) {
    if (error) {
      response.status(500).send({'status': 'error', 'error': `Database ${error.toString()}`});
      return;
    }
  });
  connection.query(queryCheck, function(error, result) {
    if (error) {
      response.status(500).send({'status': 'error', 'error': `Database ${error.toString()}`});
      return;
    }
    response.send(resultMaker(result));
  });
});

app.put('/posts/:postID/downvote', function (request, response) {
  var queryString = 'UPDATE posts SET score = score - 1 WHERE id=' + request.params.postID;
  var queryCheck = `SELECT * from posts WHERE id='${request.params.postID}'`;
  connection.query(queryString, function(error, result) {
    if (error) {
      response.status(500).send({'status': 'error', 'error': `Database ${error.toString()}`});
      return;
    }
  });
  connection.query(queryCheck, function(error, result) {
    if (error) {
      response.status(500).send({'status': 'error', 'error': `Database ${error.toString()}`});
      return;
    }
    response.send(resultMaker(result));
  });
});

app.put('/posts/:postID', function (request, response) {
  var queryString = `UPDATE posts SET title = '${request.body.title}', url = '${request.body.url}' WHERE id = ${request.params.postID}`;
  var queryCheck = `SELECT * from posts WHERE id='${request.params.postID}'`;
  connection.query(queryString, function(error, result) {
    if (error) {
      response.status(500).send({'status': 'error', 'error': `Database ${error.toString()}`});
      return;
    }
  });
  connection.query(queryCheck, function(error, result) {
    if (error) {
      response.status(500).send({'status': 'error', 'error': `Database ${error.toString()}`});
      return;
    }
    response.send(resultMaker(result));
  });
});

app.delete('/posts/:postID', function (request, response) {
  var queryString = `DELETE FROM posts WHERE id = ${request.params.postID}`;
  var queryCheck = `SELECT * from posts WHERE id ='${request.params.postID}'`;
  let body;
  connection.query(queryCheck, function(error, result) {
    if (error) {
      response.status(500).send({'status': 'error', 'error': `Database ${error.toString()}`});
      return;
    }
    body = resultMaker(result);
  });
  connection.query(queryString, function(error, result) {
    if (error) {
      response.status(500).send({'status': 'error', 'error': `Database ${error.toString()}`});
      return;
    }
    response.send(body);
  });
});

// connection.end();
app.listen(5000, () => console.log('Running'));