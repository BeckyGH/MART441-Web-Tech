
 
//array for id's of pics
let blankIds = ["pic01", "pic02", "pic03", "pic04", "pic05", "pic06", "pic07", "pic08", "pic09", "pic10"];
let backOfCard = "images/back.jpg";
let actualCards = new Array();

//JSON-creating object assigning key & values-Note values empty for names so can be added with function-age and score start at 0.
let person = {"pFirstName": "", "pLastName": "", "pAge": 0, "attempts": 0}
//variable that will let if/else if statements be true/false to execute the flipping/game
let cardNumOne = -1;
let cardNumTwo = -1;
//make variable start value 0 then will ++ in function
let score = 0;
let pairs = 0;

//------->>>>>>>>>>>>>>>>>>>>-----------------have to create a function that prints out the backs to be displayed

 function createBoard()
{
    for(let i = 0; i < blankIds.length; i++)
    {
    //set id's of images to back image - on the onload function from html 
        document.getElementById(blankIds[i]).src = backOfCard;
    }
    cardRandom(); 
    
    
} 
//------->>>>>>>>>>>---------------cards at random ---have to show twice>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
function cardRandom()
{
    let actualImage = ["images/bullseye.jpg", "images/cactus.jpg", "images/flower.jpg", "images/smile.jpg", "images/train.jpg" ];
    // have to create another array to make sure the images only get added twice
    let count = [0,0,0,0,0];
 
    // create a while loop that says if array is less than 10 execute code
    while(actualCards.length < 10)
    {
        let randomNumber = Math.floor(Math.random() * actualImage.length)
          // create an if statement that says if the total number added is less than 2, then
        // add/.push the image 
        if(count[randomNumber] < 2)
        {
            actualCards.push(actualImage[randomNumber]);
            // then add one to the array to make two cards show
            count[randomNumber] = count[randomNumber] + 1;
        }
    }   
    //console.log("testing01");
}

/*-------old flip 
function flip(number)
{
    document.getElementById(blankIds[number]).src= actualCards[number];  
    console.log('testing'); 
}
*/


function flip(number)
{
    
   //making the  first image appear 
    if(cardNumOne < 0) 
    {
        cardNumOne = number;
        document.getElementById(blankIds[cardNumOne]).src = actualCards[cardNumOne];
    
    }
    //second image will appear 
    else if(cardNumOne >= 0)
    {
        cardNumTwo = number;
        document.getElementById(blankIds[number]).src = actualCards[cardNumTwo];
        
    }
    // check to see if the images do not match 
    if(actualCards[cardNumTwo] != actualCards[cardNumOne] && cardNumOne >= 0 && cardNumTwo >= 0)
    {
        score++;
        ///set time out method is ---setTimeout(function, seconds);create function below--hw6 example and w3 schools lookup
        setTimeout(reset, 500); 
    }
    // check to see if the images do match
    else if(actualCards[cardNumTwo] == actualCards[cardNumOne] && cardNumOne >= 0 && cardNumTwo >= 0)
    {
        score++;
        pairs++;
        //resetting values so will be true ??
        cardNumOne = -1;
        cardNumTwo = -1;
        //if all pairs are accounted for then run score and send data to JSON and go to next page
        if(pairs == actualCards.length/2)
        {  
          
            person.attempts = score;
            localStorage.setItem("outData", JSON.stringify(person));
            window.location = "thirdPage.html";
        }
    }
}

function reset()
{
    document.getElementById(blankIds[cardNumOne]).src = backOfCard;
    document.getElementById(blankIds[cardNumTwo]).src = backOfCard;
    //still trying to figure out how this plays into the mix-----???? 
    cardNumOne = -1;
    cardNumTwo = -1;
}


//---------------------->>>>>>>>>>>>>>>this functioin get info into local storage thru JSON--refers back to button onlick function first page.
function getPlayerInfo()
{
    //make variable that has value of info inputed from first page  
    let fName = document.getElementById("firstNameInput").value;
    let lName = document.getElementById("lastNameInput").value;
    let age = document.getElementById("playerAgeInput").value;
  
    ///accessing the object to equal the variable above 
    //use----object.key = value of variable
    person.pFirstName = fName;
    person.pLastName = lName;
    person.pAge = age;
    
    ///to get info into JSON in local storage using a key and making the object 'person' into a string. 
    localStorage.setItem("outData", JSON.stringify(person));
    //moving on to next page
    window.location = "secondPage.html";

}


///----------------->>>>>>>>>>>>>>>>>>>>>>>>>>.getting the info out of JSON to tex
function infoOut()
{
    let information = localStorage.getItem("outData");
     //have to parse variable to become an object
     person = JSON.parse(information);
    //use object and key to make string of info to print out
    let str = "Name: " +  person.pFirstName + "<br>" + "Last: " +  person.pLastName + "<br>" + "Age: " +  person.pAge + "<br>" + "Score: " + person.attempts;

    document.getElementById("endResults").innerHTML = str;

}

//--------on third page to reset back to first page
function playAgain()
{
   window.location = "introPage.html";
}




