// Required
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Modules
const cal = require('./modules/calc');
const history = require('./modules/history');
// Port
const port = 5050;

//Serve up static files
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// return calculations
app.post('/calculations', function(req, res) {
    cal.calculations(req.body.num1, req.body.num2, req.body.op);
    history.history(req.body.num1, req.body.num2, req.body.op);
    res.sendStatus(201);
});

app.get('/history', function(req, res) {
    res.send(history.completeHistory());
});

app.get('/calc', function(req, res) {
    res.send(calc.calc());
});

// delete/clear
app.delete('/clearAll', function (req, res) {
    cal.delete();
    history.delete();
    res.send('inputCleared');
})

// start up server
app.listen(port, function () {
    console.log('listening on port: ', port);
});