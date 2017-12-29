//history data array
let historyArray = [];

//add to history array
let fillHistory = function (num1, num2, operation) {
    let operator = ' ';
    if (operation == "Add") {
        operator = '+'
    } else if (operation == "Subtract") {
        operator = '-'
    } else if (operation == "Multiply") {
        operator = '*'
    } else {
        operator = '/'
    }
    historyArray.push(num1 + ' ' + operator + ' ' + num2);
}

//return history
let completeHistory = function () {
    return historyArray;
}

// clear input
let clrInput = function () {
    result = [];
}

//export mods
module.exports = {
    completeHistory: completeHistory,
    fillHistory: fillHistory,
    clrInput: clrInput
};
