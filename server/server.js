// Required
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Modules
const calc = require('./modules/calc');
const history = require('./modules/history');
// Port
const port = 5050;

//Serve up static files
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// return calculations
app.post('/calc', function(req, res) {
    calc.calculations(req.body.num1, req.body.num2, req.body.op);
    history.fillHistory(req.body.num1, req.body.num2, req.body.op);
    res.sendStatus(201);
});

app.get('/calc', function(req, res) {
    res.send(calc.returnOutcome());
});

app.get('/history', function (req, res) {
    res.send(history.completeHistory());
});

// delete/clear
app.delete('/clrInput', function (req, res) {
    calc.clrInput();
    history.clrInput();
    res.send('inputCleared');
})

// start up server
app.listen(port, function () {
    console.log('listening on port: ', port);
});