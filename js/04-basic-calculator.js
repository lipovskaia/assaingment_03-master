/* eslint-env browser*/
/* In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:
Prompt the user for a number and store that in a variable.
Prompt the user for a second number and store that in a variable.
Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
Create a new named function called calculate() that accepts 3 parameters.
Call the calculate function and pass in the 3 variables as parameters. HINT: You will need to convert the 2 numbers from strings to numbers. 
Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
*/
var x = parseFloat(window.prompt("Please enter first number")) ; 
var y = parseFloat(window.prompt("Please enter first number")) ; 
var z = window.prompt("Please choose  to :  add, subtract, multiply or divide" ); 
function calculate(){
    switch(z){
        case "+": 
        case "add" :
            z = x +y;
            window.alert(x + " + " + y + " = " + z );
            break;
        case "-" :
        case "subtract" :
            z = x - y;
            window.alert(x + " - " + y + " = " + z );
            break;
        case "*" :
        case "multiply" :
            z = x * y;
            window.alert(x + " * " + y + " = " + z );
            break;
        case "/":
        case  "divide" :
            z = x / y ;
            window.alert(x + " / " + y + " = " + z );
            break;
    }
    
    
}
calculate(x,y,z);