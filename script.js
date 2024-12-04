let calcButtons = document.querySelector('.buttons');
let display = document.querySelector('.display');
let operands = []
let operator = []


function clearOperand(){
  operator = [];
  operands = []
}

let i = 0;

calcButtons.addEventListener('click', function(event) {
  const element = event.target;

  if (element.classList.contains('calc-button')){
    if (element.classList.contains('number')){
      if (!operands[i]) {
        operands[i] = element.textContent
      }
      else{
        operands[i] += element.textContent; 
      }
      display.textContent += element.textContent;
    }
    else if (element.classList.contains('clear')){
      display.textContent = '';
      clearOperand();
    }
    else if (element.classList.contains('operator')){
      switch (element.textContent) {
        case '=': {
          for (let i = 0; i < operator.length ; i++) {
            if (operator[i] === '*'){
              operands.splice(i,2,(operands[i] * operands[i+1]))
              operator.splice(i,1);
              console.log(operands)
              console.log(operator)
            }
            if (operator[i] === '/'){
              operands.splice(i,2,(operands[i] / operands[i+1]))
              operator.splice(i,1);
              console.log(operands)
              console.log(operator)
            }
          }
          for (let i = 0; i < operator.length ; i++) {
            if (operator[i] === '+'){
              operands.splice(i,2,((+operands[i]) + (+operands[i+1])))
              operator.splice(i,1);
              console.log(operands)
              console.log(operator)
                
              }
            if (operator[i] === '-'){
              operands.splice(i,2,((+operands[i]) - (+operands[i+1])))
              operator.splice(i,1);
              console.log(operands)
              console.log(operator)
              }  
            }
          }
          display.textContent = operands[0];
          i = 0;
          break;
        default: {
          if (!!operands[i] && !operator[i]) {
            operator[i] = element.textContent;
            display.textContent += element.textContent
            i++;
            }
          }
          break;
        }
    }
    console.log(operands)
    console.log(operator)
  }
})


  