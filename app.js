var express = require('express');
var app = express();

app.get('/api', (req, res) => {
  app.use(express.static('./www'));
  res.status(200).set('content-type','text/html')
  require('fs').ReadStream('./www/index.html').pipe(res)
});

app.post('/api', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
