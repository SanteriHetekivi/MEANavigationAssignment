var express = require('express');
var app = express();


const PORT=8000;
var GoogleAPI = require('./GoogleAPI.js');

app.get('/:origin/:destination', function(request, response){
  var params=request.params;
  console.log(params);
  GoogleAPI.directions(params.origin, params.destination, "json", function(data)
  {
    response.end(data);
  });
});

app.listen(PORT);
