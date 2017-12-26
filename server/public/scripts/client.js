$(document).ready(start);

function start() {
    console.log('jquery sourced');
    $('#recordForm').on('submit', submitNumbers);
}

function submitNumbers(event) {
    event.preventDefault();
    // console.log('Record Name', $('#recordName').val());
    var numberstoCalculate = {
        x: $('#firstNumber').val(),
        y: $('#secondNumber').val(),
        type: $(getElementById)//#####Need to findout how to handle this
    }
    console.log('Numbers', numberstoCalculate);
    $.ajax({
        type: 'POST',
        url: '/numbers', //Must match route on server
        data: numberstoCalculate
    }).done(function (response) {
        console.log(response);
    }).fail(function (message) {
        console.log('Error', message);

    })


};