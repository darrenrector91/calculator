module.exports = class Calculation {
    constructor(firstNumber, secondNumber, operation) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operation = operation;
        this.result = this.calculate(firstNumber, secondNumber, operation);
        this.operator = this.operationSymbol(operation);
    }

    calculate(firstNum, secondNum, operation) {
        let mathResult;
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (operation) {
            case 'add':
                mathResult = firstNum + secondNum;
                break;
            case 'subtract':
                mathResult = firstNum - secondNum;
                break;
            case 'multiply':
                mathResult = firstNum * secondNum;
                break;
            case 'divide':
                mathResult = firstNum / secondNum;
                break;
        }
        return mathResult;
    }

    operationSymbol(operation) {
        let operator;
        switch (operation) {
            case 'add':
                operator = '+';
                break;
            case 'subtract':
                operator = '-';
                break;
            case 'multiply':
                operator = '*';
                break;
            case 'divide':
                operator = '/';
                break;
        }
        return operator;
    }
}