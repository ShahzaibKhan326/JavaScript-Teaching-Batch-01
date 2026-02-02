// user input using button  check-->

// access input feild           (1)
// take input using input feild (2)

// show this input to input feild;

// what  value required?
// 11 + 12 = 23
// firstNumber (operator) secondNumber = result-->
// user type==>
//  1   12 ==> firstNumber    (until any operator cliked)
//  2   +  ==>  operator      (user click operator)
//  3   21 ==>  secondNumber  (second number when user clicked operator)

// calculate ==> the values by operators

let firstNumber = "";
let secondNumber = "";
let operator = "";


var display = document.getElementById("display");

function numberPressed(n)
{
    if(operator === "")
    {
        firstNumber += n;
        display.value = firstNumber
        console.log("F" , firstNumber , typeof firstNumber)
    }
    else
    {
        secondNumber +=n
        display.value = secondNumber
        console.log("S", secondNumber , typeof secondNumber)
    }
}

function operatorPressed(op)
{
    operator = op;
}

function calculate()
{
    let result = 0;
    if(operator === "+")
    {
        result = Number(firstNumber)+Number(secondNumber);
    }
     if(operator === "-")
    {
        result = Number(firstNumber)-Number(secondNumber);
    }
     if(operator === "/")
    {
        result = Number(firstNumber)/Number(secondNumber);
    }
     if(operator === "*")
    {
        result = Number(firstNumber)*Number(secondNumber);
    }
    display.value = result;

    firstNumber = result.toString()
    secondNumber = ""
    operator = ""

}

function clearScreen()
{
    firstNumber = "";
    secondNumber = "";
    operator = ""
    display.value = ""
}







// ------------Function---------------->

// function  greeting(name) // parameter
// {
//     console.log("Hello " + name)
// }

// greeting("sir") ;  // at the time of fucntion call argument

// greeting("husain")

// greeting("Hamza")


