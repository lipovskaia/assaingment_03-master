/*eslint-env browser */
/*Practice with Functions (5 points)
1.	Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
2.	Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
3.	Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
4.	Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
5.	Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.
*/

//STEP 1

  /* function halfNumber(){
     
      var one = window.prompt ("Eter any number");
     return "Half of " + one + " is " + one / 2 + " .";
     
    }
document.write(halfNumber()); */
//STEP 2
/* function squareNumber(){
     
     var one = window.prompt ("Eter any number");
     return "The result of squaring the number " + one + " is " + one * one + " .";
     
    }
document.write(squareNumber()); */
//STEP 3
/* function percentOf(){
     
     var one = window.prompt ("Eter any number");
    var two = window.prompt ("Enter another number");
     return " " + two + " is " + (two * 100) / one +  "% of " + one + " .";
     
    }
document.write(percentOf());
*/ 
//STEP 4
/* function findModulus(){
     
     var one = window.prompt ("Eter any number");
    var two = window.prompt ("Enter another number");
    var x = one % two;
     return " " + x + " is the modulus of " + one + " and " + two +  " .";
     
    }
document.write(findModulus()); */
//STEP 5

function sumAll() {
    
    var numbers = window.prompt("enter 10 numbers");
    var sum = 0;
    var i;
    for (i = 1 ; i <= 10; i ++){
        sum += numbers;
    }
    return sum;
    
    
}
document.write(sumAll());