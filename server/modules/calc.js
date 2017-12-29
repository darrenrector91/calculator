// set variable
let result = [];

// math operations
let calculations = function (num1, num2, operation) {
    num1 = Number(num1);
    num2 = Number(num2);
    let outcome = 0;
    if (operation == 'Add') {
        outcome = num1+num2;
    } else if (operation == 'Subtract') {
        outcome = num1-num2;
    } else if (operation == 'Multiply') {
        outcome = num1*num2;
    } else {
        outcome = num1/num2;
    }
    result.push(outcome);
}//end operations

// get operation outcome/result
let returnOutcome = function () {
    return result;
}

// clear input
let clrInput = function () {
    result = [];
}

// export mods
module.exports = {
    returnOutcome: returnOutcome,
    calculations: calculations,
    clrInput: clrInput
};

