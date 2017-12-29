console.log('client.js loaded');

let operator = '';

class doMath {
    constructor(num1, num2, operation) {
        this.num1 = num1,
            this.num2 = num2,
            this.operation = operation
    }
} //end class

$(document).ready(calcApp);

function calcApp() {
    history();
    // Event Listeners
    $('#btnAdd').on('click', function () {
        operation = 'Add';
    });
    $('#btnSubtract').on('click', function () {
        operation = 'Subtract';
    });
    $('#btnMultiply').on('click', function () {
        operation = 'Multiply';
    });
    $('#btnDivide').on('click', function () {
        operation = 'Divide';
    });
    $('#btnClear').on('click', clrInput);
    $('#btnEquals').on('click', inputs);
}//end calc

//inputs
function inputs(event) {
    event.preventDefault();
    let firstNumber = $('#firstNumber').val();
    let secondNumber = $('#secondNumber').val();

    //Make object for inputs to pass to server
    let calculatorObject = new doMath(firstNumber, secondNumber, operator);
    // console.log(firstNumber);
    
    // Clear input
    $('#firstNumber').val('');
    $('#secondNumber').val('');

    $.ajax({
        method: 'POST',
        url: '/calc',
        data: calculatorObject,
        success: function (response) {
            history();
            outcome();
        }
    });
} //end input

function display(result) {
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
        
        $('#outcome').text(result[i]);
    }
} // end display

function outcome() {
    $.ajax({
        method: 'GET',
        url: '/calc',
        success: function (response) {
            display(response);
        }
    });
} // end outcome

function show(history) {
    // Append DOM
    for (let i = 0; i < history.length; i++) {
        var $historyList = $('<li>');
        $historyList.append(history[i]);
        console.log(history[i]);
    }
    var list = $('#history').append($historyList);
    return list;
} // end show

function history() {
    $.ajax({
        method: 'GET',
        url: '/history',
        success: function (response) {
            console.log('history response', response);
            show(response);
        }
    });
}

function clrInput() {
    $.ajax({
        method: 'DELETE',
        url: '/clrInput',
        success: function (response) {
            console.log('response', response);
            $('#history').empty();
            $('#outcome').html('');
        }
    });
}