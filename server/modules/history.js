//history data array
let historyArray = [];

//add to history array
let fillHistory = function (num1, num2, operation) {
    let operator = ' ';
    if (operation == "Add") {
        operator = '+'
    }if (operation == "Subtract") {
        operator = '-'
    }if (operation == "Multiply") {
        operator = '*'
    }if (operation == "Divide"){
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
