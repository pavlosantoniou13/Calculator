const numberButtons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('operator')
const equal = document.querySelector("equal")
const clear = document.querySelector("AC")
const previousOperand = document.querySelector("previous-operand")
const currentOperand = document.querySelector("current-operand")
const deleteButton = document.querySelector("delete")


function operate(num1, num2, operator){
    if(operator === "+"){
        return add(num1, num2)
    }
    else if(operator === "-"){
        return subtract(num1, num2)
    }
    else if(operator === "*"){
        return multiply(num1, num2)
    }
    else if(operator === "÷"){
        return divide(num1, num2)
    }
    
    
    
}

//Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
let display = document.querySelector("display")
storedNumber = "";
clickedOperator = "";
firstNumber = "";
let result = "";

numberButtons.forEach(number => number.addEventListener('click', (e) =>{
    storedNumber = e.target.value
    

}))



operatorButton.forEach((operator => {
    operator.addEventListener('click', function() {
  
      // save the first number
      firstNumber = storedNumber;
  
      // get the operator that was clicked
      clickedOperator = operator.textContent;
      previousOperand.textContent = storedNumber + clickedOperator;
      storedNumber = '';
  
      
    })
}));




  









const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

function divide(a, b) {
    return a / b;
};


// Multiply a, b ... 
function multiply(a, b) {
    return a * b;
};












//clear()


