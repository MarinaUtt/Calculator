let calcButtons = document.querySelector('.buttons');
let display = document.querySelector('.display');
let firstOperand = '';
let secondOperand ='';
let operator = '';
let result = '';

function clearOperand(){
  firstOperand = '';
  secondOperand ='';
  operator = '';
  result = '';
}

calcButtons.addEventListener('click', function(event) {
  const element = event.target;

  if (display.textContent === 'error'){
    display.textContent = '';
    clearOperand();
  }
  if (element.classList.contains('calc-button')){
    if (element.classList.contains('number')){
      if(!!firstOperand) {
        secondOperand += element.textContent;
      }
      display.textContent += element.textContent;
    }
    else if (element.classList.contains('clear')){
      display.textContent = '';
      clearOperand();
    }
    else if (element.classList.contains('operator')){
      switch (element.textContent) {
        case '+': {
          if (!!display.textContent && !operator) {
            firstOperand = display.textContent;
            operator = element.textContent;
            display.textContent += element.textContent
            }
          }
          break;
        case '-': {
          if (!!display.textContent && !operator) {
            firstOperand = display.textContent;
            operator = element.textContent;
            display.textContent += element.textContent
            }
          }
          break;
        case '*': {
          if (!!display.textContent && !operator) {
            firstOperand = display.textContent;
            operator = element.textContent;
            display.textContent += element.textContent
            }
          }
          break;
        case '/': {
          if (!!display.textContent && !operator) { 
            if (secondOperand === '0'){
              display.textContent = 'error'
            }
            else {
            firstOperand = display.textContent;
            operator = element.textContent;
            display.textContent += element.textContent
            }
          }
        }
          break;
        case '=': {
          if (secondOperand) {
            switch (operator) {
              case '+':{
                result = (+firstOperand) + (+secondOperand)
                display.textContent = result;
                clearOperand();
                }
                break;
              case '-':{
                result = (+firstOperand) - (+secondOperand)
                display.textContent = result;
                clearOperand();
                }
                break;
              case '*':{
                result = (+firstOperand) * (+secondOperand)
                display.textContent = result;
                clearOperand();
                }
                break;                
              case '/':{
                if (secondOperand === '0') {
                display.textContent = 'error'
                }
                else {
                result = (+firstOperand) / (+secondOperand)
                display.textContent = result;
                clearOperand();
                }}
                break;  
            }
          }
          break;
        }
      }
    }
  }
})