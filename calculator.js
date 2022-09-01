// ES6 Class template for creating objects
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandText = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
       
    // Methods
    clear(){
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
       this.currentOperand = this.currentOperand.toString() + number.toString();
       
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand

    }
}

//Selecting HTML elements
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


//New object inheriting properties from the Calculator class 
const calculator =  new Calculator(previousOperandTextElement, currentOperandTextElement)


// Loop
numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

// Push comment

