let firstOperand = ''
let secondOperand = ''
let operation = null
let shouldResetScreen = false

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
    if(shouldResetScreen) resetScreen()
    if(screen.textContent === '0')
        screen.textContent = num
    else if(operation === null) screen.textContent += num
    else{
        secondOperand += num
        screen.textContent = `${firstOperand} ${operation} ${secondOperand}`
    }
}

function setOperator(operator){
    firstOperand = screen.textContent
    operation = operator
    screen.textContent = `${firstOperand} ${operation}`
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
    if(operation === null || secondOperand === '') return
    let ans = executeOperation()
    screen.textContent = `${ans}`
    firstOperand = ''
    secondOperand = ''
    operation = null
    shouldResetScreen = true
}

function executeOperation(){
    let a = firstOperand
    let b = secondOperand
    a = Number(a)
    b = Number(b)
    let ans = 0
    if(operation === '+')
        return a+b
    else if(operation === '-')
        return a-b
    else if(operation === '*')
        return a*b
    else if(operation === '/')
        return a/b
    else alert("Enter the correct operation man!!")
}