/* The Rock, Paper, Scissors Game (20 points)
Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
•	Rock destroys scissors.
•	Scissors cut paper.
•	Paper covers rock.
Our code will break the game into 3 phases:
1.	User makes a choice. How will we collect the user’s choice?
2.	Computer makes a choice. How will we collect the computer’s choice?
3.	A conditional that determines who wins.
In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
1.	Begin by prompting the user for their choice.
2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
5.	What if the result ends in a tie? Figure out how to handle that as well.
6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
*/ 
var player = window.prompt( "Please shoose : Rock or Paper or Scissors ");
var computer = Math.floor((Math.random()*3) +1);
function sissorsGame(){
    
    
    if (payer == rock && computer == 1){
        document.write("It's a tie");
    } if (payer == rock && computer == 2) {
        document.write(" " + player + " is lost to paper");
    }if (player == rock && computer == 3 ){
        document.write(" " + player + " is won over sissors");
    } if (player == paper && computer == 1 ){
        document.write(" " + player + " is won over rock");
    }if (player == paper && computer == 2 ){
        document.write("It's a tie");
    }if (player == paper && computer == 3 ){
        document.write(" " + player + " is lost to sissors ");
    }else{
        
    }
        
    }
