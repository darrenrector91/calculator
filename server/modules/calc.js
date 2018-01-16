// set variable
let result = [];

// math operations
let calculations = function (num1, num2, operation) {
    num1 = Number(num1);
    num2 = Number(num2);
    let outcome = "";
    if (operation == 'Add') {
        outcome = num1+num2;
    }    
    if (operation == 'Subtract') {
        outcome = num1-num2;
    }
    if (operation == 'Multiply') {
        outcome = num1*num2;
    }
    if (operation == 'Divide') {
        outcome = num1/num2;
    }
    result.push(outcome);
    console.log(outcome);
    
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
    calculations: calculations,
    returnOutcome: returnOutcome,
    clrInput: clrInput
};
