
/////////using the example from GitHub as a refrence to create the story---------------------------
function adventureStory(choice) {

    var option1 = document.getElementById("yesButton").innerHTML;
    var option2 = document.getElementById("noButton").innerHTML;
   
    ///////////////if you want to go on an adventure-----------see 'bottom' of script for no adventure
    if (choice == 1 && option1 == "sure"){
        document.getElementById("description").innerHTML = `She loves the ocean and would like to take a beach vacation.
        Where should she go?`;
        document.getElementById("yesButton").innerHTML = "Cancun Mexico";
        document.getElementById("noButton").innerHTML = "Fiji Islands";
    }

     ///////if picks to go to CANCUN//////////////////////////////////////////////////////////////////////////////
     else if (choice == 1 && option1 == "Cancun Mexico"){
        document.getElementById("description").innerHTML = "Cancun is awesome! She's getting thirsty, lets get her a drink." + " What will it be?";
        document.getElementById("yesButton").innerHTML = "Sex on the Beach";
        document.getElementById("noButton").innerHTML = "Tequila Sunrise";
    }

    /////if  picks SEX ON THE BEACH drink in cancun 
    else if (choice == 1 && option1 == "Sex on the Beach"){
        document.getElementById("description").innerHTML = "That was so delicious! But unfortunately she has had one too many and now it's time to decide." + " What will it be?";
        document.getElementById("yesButton").innerHTML = "Take a Nap";
        document.getElementById("noButton").innerHTML = "Go Home";
    }
    /////if picks TEQUILA SUNRISE in Cancun---------its the same results just using different button 
    else if (choice == 2 && option2 == "Tequila Sunrise"){
        document.getElementById("description").innerHTML = "That was so yummy! But looks like she's had one too many. Time to decide, What will it be?";
        document.getElementById("yesButton").innerHTML = "Take a Nap";
        document.getElementById("noButton").innerHTML = "Go Home";
    }


    //////////////////if picks take a nap or go home both are the same and refresh will restart the loop and end goes nowhere
    else if (choice == 1 && option1 == "Take a Nap"){
        document.getElementById("description").innerHTML = "She is done resting. Is it time to call it quits or to start over?";
        document.getElementById("yesButton").innerHTML = "Restart";
        document.getElementById("noButton").innerHTML = "End";
    }
    else if (choice == 2 && option2 == "Go Home"){
        document.getElementById("description").innerHTML = "It's time to call this adventure quits.";
        document.getElementById("yesButton").innerHTML = "Restart";
        document.getElementById("noButton").innerHTML = "End";
    }



     /////////if picks to go to FIJI////////////////////////////////////////////////////////////////////////////////////////
     else if ( choice == 2 && option2 == "Fiji Islands"){
        document.getElementById("description").innerHTML = "The Fiji Islands are full of adventure. Which is something Sarah has been lacking. Which one will you have her embark upon?";
        document.getElementById("yesButton").innerHTML = "Horseback Riding";
        document.getElementById("noButton").innerHTML = "Scuba Diving";
    }
    ///////////////////------HORSEBACK RIDING OPTION---------------options are the same and eventually restart the loop or end it/////////
    else if ( choice == 1 && option1 == "Horseback Riding"){
        document.getElementById("description").innerHTML = "That was a full day of riding and Sarah is a bit sore but had so much fun!! What's next?";
        document.getElementById("yesButton").innerHTML = "Take a Nap";
        document.getElementById("noButton").innerHTML = "Go Home";
    }
    ////////////////---------SCUBADIVING OPTION----------------
    else if ( choice == 2 && option2 == "Scuba Diving"){
        document.getElementById("description").innerHTML = "She saw so many beautiful creatures and had so much fun in the water!! Now what to do?";
        document.getElementById("yesButton").innerHTML = "Take a Nap";
        document.getElementById("noButton").innerHTML = "Go Home";
    }

    
    ////////////\\\\\\\\\\\\\\\copied from the CANCUN PORTION--------////////\\\\\\\\\\\\\\\//////////////////
    else if (choice == 1 && option1 == "Take a Nap"){
        document.getElementById("description").innerHTML = "She is all rested now. Is it time to call it quits or to start her adventure over?";
        document.getElementById("yesButton").innerHTML = "Restart";
        document.getElementById("noButton").innerHTML = "End";
    }
    else if (choice == 2 && option2 == "Go Home"){
        document.getElementById("description").innerHTML = "It's time to call this adventure quits.";
        document.getElementById("yesButton").innerHTML = "Restart";
        document.getElementById("noButton").innerHTML = "End";
    }





    //\\\\\\\\\\\\\------------if you pick NO ADVENTURE ////////\\\\\\\\\\\\\\/////////////\\\\\\\\\\\\///////

    else if(choice == 2 && option2 == "no way") {
        document.getElementById("description").innerHTML = "Well that's too bad!" + " What a party pooper!";
        document.getElementById("yesButton").innerHTML = "Restart";
        document.getElementById("noButton").innerHTML = "End";
    }

    //------- option for clicking the no button in the beginning and at the end of the decisions of the adventures ----to restart or end it //
    else if (choice == 1 && option1 == "Restart"){
        document.getElementById("description").innerHTML = `This story is about a woman name Sarah who stays miserably stuck in her job. She works in a public  
       office and spends most of her days wishing she was somewhere else. Let's take her on an adventure?`;
       document.getElementById("yesButton").innerHTML = "sure";
       document.getElementById("noButton").innerHTML = "no way";
    }
    
  
    else if (choice == 2 && option2 == "End"){
        document.getElementById("description").innerHTML = "Sarah says Thanks and Adios!";
    }



}

   
   
   
 
   
   
   
   
   
   
   
    
    
















    