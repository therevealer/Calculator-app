class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandText = previousOperandTextElement
        this.currentOperandText = currentOperandTextElement
        this.clear()
    }
    
    clear(){
        this.previousOperand = ''
        this.currentOperation = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(){

    }

    chooseOperation(){

    }

    compute(){

    }

    updateDisplay(){

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')




