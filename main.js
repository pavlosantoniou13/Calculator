const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const display = document.querySelector(".calculator-display")
const previousOperand = document.querySelector(".previous-operand")
const currentOperand = document.querySelector(".current-operand")
const showResult = document.querySelector('.result');
const equalsKey = document.querySelector('.equals-key');
const clear = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")


const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b
}

function operate(num1, num2, operator){
    if(operator === "+") {
        return add(num1, num2)
    }
    else if(operator === "-") {
        return subtract(num1, num2)
    }
    else if(operator === "*") {
        return multiply(num1, num2)
    }
    else if(operator === "/") {
        return divide(num1, num2)
    }
}

let firstNumber = ""
let clickedOperator = ""
let storedNumber = ""
let result = ""
currentOperand.textContent = 0;

numbers.forEach((number) => {
    number.addEventListener('click', function() {
        storedNumber += number.value
        currentOperand.textContent = storedNumber
    })
})


operators.forEach((operator) => {
    operator.addEventListener('click', function() {

        if(firstNumber !== "" && storedNumber !== ""){
            result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
            
            
            currentOperand.textContent = ""
        }

        firstNumber = storedNumber
        storedNumber = ""
        clickedOperator = operator.textContent
        previousOperand.textContent = firstNumber + " " + clickedOperator
        
        currentOperand.textContent = storedNumber
        
        if(result !== ""){
            firstNumber = result
            clickedOperator = operator.textContent
            previousOperand.textContent = firstNumber + " " + clickedOperator
            storedNumber = ''
            currentOperand.textContent = storedNumber

        }
           
        
    })
})



equalsKey.addEventListener("click", function() {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
    currentOperand.textContent = result
    previousOperand.textContent = firstNumber + " " + clickedOperator + " " + storedNumber
    
    
    
})

clear.addEventListener("click", function(){
    storedNumber = ""
    firstNumber = ""
    currentOperand.textContent = "0"
    previousOperand.textContent = ""
    result = ""
})

deleteButton.addEventListener("click", function(){
    storedNumber = ""
    currentOperand.textContent = "0"
})