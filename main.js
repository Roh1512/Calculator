//Variables for Numbers and operator
let num1 = null;
let num2 = null;
let operator = '';

let result = document.getElementById('result');

//Listen for key press events
window.addEventListener('keydown', (e) => {
  const key =  e.key;
  if (!isNaN(key)){
    appendNumber(key);
  }else if (key === '+' || key === '-' || key === '*' || key === '/'){
    appendOperator(key);
  }else if (key === 'Enter' || key === 'Equal') {
    equal();
  }else if (key === '.') {
    appendDecimal(key);
  }else if (key === 'Delete'){
    resetCalc();
  }else if(key === 'Backspace'){
    backSpace();
  }

  if(e.shiftKey && e.code === 'Digit8'){
    const keyButton = document.querySelector(`button[data-key = "*"]`);
    if(keyButton) {
    keyButton.classList.add('playing');
    }
  }else if(e.shiftKey && e.code === 'Equal'){
    const keyButton = document.querySelector(`button[data-key = "+"]`);
    if(keyButton){
      keyButton.classList.add('playing');
    }
  }
  else {
  let keyCode = e.code;
  const keyButton = document.querySelector(`button[data-key = ${keyCode}]`);
  if(keyButton){
    keyButton.classList.add('playing');
  }
  }
});

window.addEventListener('keyup', (e) => {
  if(e.shiftKey && e.code === 'Digit8'){
    const keyButton = document.querySelector(`button[data-key = "*"]`);
    if(keyButton){
      keyButton.classList.remove('playing');
    }
  }else if(e.shiftKey && e.code === 'Equal'){
    const keyButton = document.querySelector(`button[data-key = "+"]`);
    if(keyButton){
      keyButton.classList.remove('playing');
    }
  }
  else {
  let keyCode = e.code;
  const keyButton = document.querySelector(`button[data-key = ${keyCode}]`);
  if(keyButton){
    keyButton.classList.remove('playing');
  }
  }
})



function appendNumber(value){
  result.value+=value;
  if (operator === '') {
    num1 = Number(result.value);
  }else{
    num2 = Number(result.value)
  }
}

function appendOperator(val) {
  equal();
  operator = val;
  result.value = '';
}

function appendDecimal(value) {
  result.value += value;
}

function resetCalc() {
  result.value = '';
  num1 = null;
  num2 = null;
  operator = '';
}

function equal() {
  if (num1,num2 !== null) {
    let answer = operate(num1,num2,operator);
    result.value = answer;
    num1 = result.value;
    num2 = 0;
  }
}

function backSpace() {
  let inputValue = result.value;
  result.value = inputValue.substring(0,inputValue.length - 1);
}



function operate(n1,n2,op){
  n1 = Number(n1);
  n2 = Number(n2);
  switch(op) {
    case '+':{
      return add(n1,n2);
      break;
    }
    case '-':{
      return substract(n1,n2);
      break;
    }
    case '*':{
      return multiply(n1,n2);
      break;
    }
    case '/':{
      return division(n1,n2);
      break;
    }
    default: {
      return 'invalid Operator';
    }
  }
}

function add(x,y) {
  return ((x * 10) + (y * 10)) / 10;
}
function substract(x,y){
  return ((x * 10) - (y * 10)) / 10;
}
function multiply(x,y){
  return x * y;
}
function division(x,y) {
  if(y === 0) {
    return "Undefined";
  }else {
    return x/y;
  }
}