let num1 = null;
let num2 = null;
let operator = '';

let result = document.getElementById('result');

//Listen for key press events
window.addEventListener('keydown', (e) => {
  const key =  e.key;
  console.log(key)
  console.log(`Code:${e.code}`)
  if (!isNaN(key)){
    appendNumber(key);
  }else if (key === '+' || key === '-' || key === '*' || key === '/'){
    appendOperator(key);
  }else if (key === 'Enter' || key === 'Equal') {
    equal();
  }else if (key === '.') {
    appendDecimal(key);
  }else if (key === 'Backspace'){
    resetCalc();
  }

  if(e.shiftKey && e.code === 'Digit8'){
    const keyButton = document.querySelector(`button[data-key = "*"]`);
    keyButton.classList.add('playing');
  }else if(e.shiftKey && e.code === 'Equal'){
    const keyButton = document.querySelector(`button[data-key = "+"]`);
    keyButton.classList.add('playing');
  }
  else {
  let keyCode = e.code;
  const keyButton = document.querySelector(`button[data-key = ${keyCode}]`);
  keyButton.classList.add('playing');
  }
});

window.addEventListener('keyup', (e) => {
  if(e.shiftKey && e.code === 'Digit8'){
    const keyButton = document.querySelector(`button[data-key = "*"]`);
    keyButton.classList.remove('playing');
  }else if(e.shiftKey && e.code === 'Equal'){
    const keyButton = document.querySelector(`button[data-key = "+"]`);
    keyButton.classList.remove('playing');
  }
  else {
  let keyCode = e.code;
  const keyButton = document.querySelector(`button[data-key = ${keyCode}]`);
  keyButton.classList.remove('playing');
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
    console.log(answer)
    result.value = answer;
    num1 = result.value;
    num2 = 0;
  }
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
  return x + y;
}
function substract(x,y){
  return x - y;
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
