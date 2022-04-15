let firstOperand = ''
let secondOperand = ''
let operation = null

const screen = document.getElementById('screen')
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalBtn = document.getElementById('equal')
const deleteBtn = document.getElementById('delete')
const clearBtn = document.getElementById('clear')

clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteNum)
equalBtn.addEventListener('click', evaluate)

numberButtons.forEach( (button) => button.addEventListener('click', () => appendNum(button.textContent)) )
operatorButtons.forEach( (button) => button.addEventListener('click', () => setOperator(button.textContent)) )

function appendNum(num){
    if(screen.textContent === '0') screen.textContent = num
    else screen.textContent += num
}

function setOperator(operator){
    firstOperand = screen.textContent
    operation = operator
    screen.textContent = `${firstOperand} ${operation}` // second operand ka kuch soch lo varna secondary screen shit vapas karna padega
                                                    // we can add in append num that if firstOperand !== '' then do this aise
}

function clear(){
    firstOperand = ''
    secondOperand = ''
    operation = null
    screen.textContent = ''
}

function resetScreen(){
    screen.textContent = ''
}

function deleteNum(){
    screen.textContent = screen.textContent.toString().slice(0, -1)
}

function evaluate(){
    if(operation == null) return

}