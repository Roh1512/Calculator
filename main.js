let num1 = null;
let num2 = null;
let operator = '';

let result = document.getElementById('result');


function appendNumber(value){
  result.value+=value;
  if(operator === '') {
    num1 = Number(result.value);
  }else {
    num2 = Number(result.value)
  }
}

function appendOperator(val) {
  equal();
  operator = val;
  console.log(operator);
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
  if(num1,num2 !== null) {
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
