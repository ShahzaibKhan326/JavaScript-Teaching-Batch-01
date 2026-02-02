
const display = document.getElementById("display");

let firstNumber = ""
let secondNumber = ""
let operator = ""
let isOperatorPressed = false;


function numberPressed(n)
{
    
 if(isOperatorPressed)
 {
   secondNumber += n;
   display.value = secondNumber
//    console.log("S"+secondNumber)
 }
 else
 {
   firstNumber += n;
//    console.log("F"+firstNumber)
   display.value = firstNumber;
 }

}

function operatorPressed(op)
{
    if(firstNumber === "") return;
    operator = op;
    isOperatorPressed = true;
}
function calculate()
{
    let result = 0;
  console.log(firstNumber + " " +operator + " "+ secondNumber)
  if(operator == "+")
  {
    result = Number(firstNumber)+Number(secondNumber)
  }
  if(operator == "-")
  {
    result = Number(firstNumber)-Number(secondNumber)
  }
  if(operator == "/")
  {
    result = Number(firstNumber)/Number(secondNumber)
  }
  if(operator == "*")
  {
    result = Number(firstNumber)*Number(secondNumber)
  }
  display.value = result;
  firstNumber = result.toString()
  secondNumber = "";
  operator = "";
  isOperatorPressed=false;
}

function clearScreen()
{
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isOperatorPressed = false;
    display.value = " ";
}