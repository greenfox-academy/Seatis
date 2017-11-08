var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var jsonParser = bodyParser.json();

app.use('/assets', express.static('./assets'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/hello', function(request, response) {
  response.json({'hello': 'bello'});
});


app.get('/doubling', function(req, res) {
  if (req.query.input) {
      res.json({
          "received": req.query.input,
          "result": req.query.input * 2
      })
  }
  else {
      res.json({
          "error": "Please provide an input!"
      })
  }   
});

app.get('/greeter', function(req, res) {
  if (req.query.name && req.query.title) {
      res.json({"welcome_message": "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!"})
  }
  else {
      res.json({
          "error": "Please provide a name!"
      })
  }   
});

app.get('/appenda/:input', function (req, res) {
  res.json({"appended": req.params.input + 'a'});
});



app.post('/dountil/:what', jsonParser, function (req, res) {
  console.log(req.body);
  let summa = 0;
  if (req.params.what === 'sum') {
    for (let i = 0; i <= req.body.until; i++) {
      summa += i;
    }
    res.json({'result': summa});
  } else if (req.params.what === 'factor') {
    let number = req.body.until;
    let i = req.body.until -1;
    while (i > 0) {
      number *= i;
      i--;
    }
    res.json({'result': number});
  }
});


app.listen(8080);
console.log('now listening to port 8080');
