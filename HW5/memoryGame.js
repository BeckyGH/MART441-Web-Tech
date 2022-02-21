
 
//array for id's of pics
let blankIds = ["pic01", "pic02", "pic03", "pic04", "pic05", "pic06", "pic07", "pic08", "pic09", "pic10"];

let actualImages = ["images/clover.jpg", "images/flower.jpg","images/smile.jpg", "images/square.jpg", "images/submarine.jpg", "images/elk.jpg", "images/train.jpg", "images/cactus.jpg", "images/bullseye.jpg", "images/house.jpg" ];
let actualCards = new Array();
 ////have to create a function that prints out the backs to be displayed
 ///using the onload from the body 
 function createBoard()
{
  //make variable for back image
    var backImageDisplay = "images/back.jpg";
     // create a loop to go through the tags id's array
    for(let i = 0; i < blankIds.length; i++)
    {
    //set id's of images to back image - on the onload function from html 
        document.getElementById(blankIds[i]).src = backImageDisplay;
    }
     // call the random image creation function
    cardRandom(); 
    
    
} 
//trying to get hem to display randomly 
function cardRandom()
{
        for (let i = 0; i < actualImages.length; i ++)
                {
                    let randomNumber = Math.floor(Math.random() * actualImages.length );
                   
                    if(randomNumber < 10)
                    {
                        actualCards.push(actualImages[randomNumber]);
                    }
              
                }

                console.log("f@c!!");
}


//uses flip function from html and uses 'parameters' from there

function flip(number)
{
    document.getElementById(blankIds[number]).src= actualCards[number];  
}






