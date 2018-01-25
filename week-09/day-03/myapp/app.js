var express = require('express');

var app = express();



app.use('/assets', express.static('./assets'));
app.use(express.json());

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
  else if (!req.query.name) {
    res.json({
      "error": "Please provide a name!"
    });
  }
  else {
    res.json({
      "error": "Please provide a title!"
    });
  }
});

app.get('/appenda/:input', function (req, res) {
  res.json({"appended": req.params.input + 'a'});
});



app.post('/dountil/:what', function (req, res) {
  if (typeof req.body.until === 'number') {
    let number = req.body.until;
    let summa = 0;
    if (req.params.what === 'sum') {
      for (let i = 0; i <= number; i++) {
        summa += i;
      }
      res.json({'result': summa});
    } else if (req.params.what === 'factor') {
      let i = number -1;
      while (i > 0) {
        number *= i;
        i--;
      }
      res.json({'result': number});
    }
  } else {
    res.json({'error': 'Please provide a number!'});
  }
});

app.post('/arrays', function (req, res) {
  if (!req.body.what) {
    res.json({'error': 'Please provide what to do with the numbers!'});
  } else if (!req.body.numbers) {
    res.json({'error': 'Please provide the numbers!'});
  } else {
    let result;
    if (req.body.what === 'sum') {
      result = 0;
      req.body.numbers.forEach(function(element) {
        result += element;
      });
    } else if (req.body.what === 'multiply') {
      result = 1;
      req.body.numbers.forEach(function(element) {
        result *= element;
      });
    } else if (req.body.what === 'double') {
      result = req.body.numbers.map(num => num * 2);
    }
    res.json({'result': result});
  }
});


app.listen(8080);
console.log('now listening to port 8080');
