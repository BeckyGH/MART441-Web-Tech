
///this is me trying to figure out how to incorporate a function with parameters
//i think I understand the concept of parameters but am not getting how to incorporate it into this assignment---hints the myHeadache name :) !!!!!!
function myHeadache (param1) 
{
   
    document.write('<h1>Career Options</h1>');
    return param1 ;
}

let val = myHeadache('Career Options');
// print to check if accurate 
console.log(val);

//feel like some of this could be more simplified----
function career()
{
    const myCareer = document.getElementById("careerChoice").value;
    const myQuestion = document.getElementById("questions");
    
    if(myCareer ===  "Ceramist")
    {
        ///rid of this button
         document.getElementById("careerChoice").style.display="none";
         document.getElementById("btnSubmit").style.display="none";
   
        //this displays image
         document.getElementById("storyImage").src = "./images/project.png";
    
        //display this button
        document.getElementById("projectChoice").style.display="block";
        document.getElementById("btnSubmit2").style.display="block";
    
        ///changes to this question
        myQuestion.innerHTML =  "Ceramist is a great choice. Now it's time to start working. What project would you like to begin?";
    }

    else if(myCareer === "Animator")
    {
        //rid of this button
        document.getElementById("careerChoice").style.display="none";
        document.getElementById("btnSubmit").style.display="none";
        //this displays image
        document.getElementById("storyImage").src = "./images/company.png";
        //display this button
        document.getElementById("companyChoice").style.display="block";
        document.getElementById("btnSubmit4").style.display="block";
        //changes to this question
        myQuestion.innerHTML = "Animator is a great choice.  What company do you want to work for?";

    }

    else
    { 
    //or if neither are enter it gives this response 
    myQuestion.innerHTML = "Invalid answer. Please choose Ceramist or Animator";
    }

}

//function for Ceramist projects choices
function project()
{
    const projectName = document.getElementById("projectChoice").value;
    const myQuestion = document.getElementById("questions");
    
    if(projectName == "Mugs" || projectName =="Sculpture")
    {
        //rid of 
        document.getElementById("projectChoice").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";
 
        //this displays image
        document.getElementById("storyImage").src = "./images/museum.png";

        //display this button
        document.getElementById("museumChoice").style.display="block";
        document.getElementById("btnSubmit3").style.display="block";
        myQuestion.innerHTML = `Your projects are stunning and have gained much attention. You have been chosen to display some of your pieces in a museum.
        Which museum do you wish to have them displayed them at?`;
    }

    else
    { 
    //or if neither are enter it gives this response 
    myQuestion.innerHTML = "Invalid answer. Please choose Mugs or Sculpture.";
    }

}



function company()
{
    const companyName = document.getElementById("companyChoice").value;
    const myQuestion = document.getElementById("questions");
    
    if(companyName == "Disney" || companyName =="Playstation")
    {
        document.getElementById("companyChoice").style.display="none";
        document.getElementById("btnSubmit4").style.display="none";
        //this displays image
        document.getElementById("storyImage").src = "./images/museum.png";

        document.getElementById("museumChoice").style.display="block";
        document.getElementById("btnSubmit3").style.display="block";
  
        myQuestion.innerHTML = `You have done a wonderful job on many projects, your company is proud. They have selected
        some of your work to be showcased at a museum. 
        Which museum would you prefer?`;
    }

    else
    { 
    //or if neither are enter it gives this response 
    myQuestion.innerHTML = "Invalid answer. Please choose Disney or Playstation.";
    }
}



/////function options for projects to be displayed at museum
function museum() 
{
    const museumName = document.getElementById("museumChoice").value;
    const myQuestion = document.getElementById("questions");
    
    if (museumName == "MOMA" || museumName == "Chicago")
    {
        document.getElementById("museumChoice").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";
        ////image display
        document.getElementById("storyImage").src = "./images/donation.png";

        document.getElementById("donationChoice").style.display="block";
        document.getElementById("btnSubmit5").style.display="block";
        myQuestion.innerHTML = `You've made the right choice! Your work will be seen my many. 
        Would you like to make a donation to the museum?`;
    }

    else
    { 
    //or if neither are enter it gives this response 
    myQuestion.innerHTML = "Invalid answer. Please choose MOMA or Chicago.";
    }
}


function donation() 
{
   
    const donate = document.getElementById("donationChoice").value;
    const myQuestion = document.getElementById("questions");
    
    if (donate == "Yes") 
    {
        ///rid of this button
        document.getElementById("donationChoice").style.display = "none";
        document.getElementById("btnSubmit5").style.display = "none";

        ///image display
        document.getElementById("storyImage").src = "./images/thinker.png"

        ///SOMEHOW NEED TO RELOOP TO THE BEGINNING HERE
        document.getElementById("restartChoice").style.dispaly = "block";
        document.getElementById("restartButton").style.display = "block"; 



    ///this is the question
    myQuestion.innerHTML = "Thank You for your donation. Now it's time to restart";
    

    }
    else if(donate === "No")
    {
         ///rid of this button
         document.getElementById("donationChoice").style.display = "none";
         document.getElementById("btnSubmit5").style.display = "none";
 
         ///image display
         document.getElementById("storyImage").src = "./images/thinker.png"
 
         ///SOMEHOW NEED TO RELOOP TO THE BEGINNING HERE
         document.getElementById("restartChoice").style.dispaly = "block";
         document.getElementById("restartButton").style.display = "block"; 

         myQuestion.innerHTML = "Maybe next time. Let's start over!";
 
    }

    else
    { 
    //or if neither are enter it gives this response 
    myQuestion.innerHTML = "Invalid answer. Please choose Yes or No.";
    }

}


///figure i need to/could use a loop to restart the story but I didnt figure out how so I used a simple reload
///found online in a search of how to restart--used the onclick restart button 

 function restart()
 {
     location.reload();
 }


