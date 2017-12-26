var express = require('express');
var app = express();
var port = 5050;
var bodyParser = require('body-parser');

//Serve up static files
app.use(express.static('server/public'));












// Start up server
app.listen(port, function () {
    console.log('listening on port: ', port);
});