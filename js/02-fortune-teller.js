/* eslint-env browser */
/* The Fortune Teller (5 points)
Why pay a fortune teller when you can just program your fortune yourself? Write a function named tellFortune() that:
•	Takes 4 arguments: number of children, partner's name, geographic location, job title.
•	Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
•	Call that function 3 times with 3 different values for the arguments. */

function tellFortune(job, location, partner, children){
   
   var future = "You will be a " + job + " in " + location + " , and married to " + partner + " with " + children + " children .";
       document.write(future);
    
     }
tellFortune("Bear Tamer",  "Russia", "Masha", "7" );
tellFortune("Prophet of Mormons", "Utah" , "Noccolet, Nadine and Silvia ", "25" );
tellFortune("President of the US", " The Wite House", "Malania", "3" );

