
 
//array for id's of pics
let blankIds = ["pic01", "pic02", "pic03", "pic04", "pic05", "pic06", "pic07", "pic08", "pic09", "pic10"];

let actualImages = ["images/clover.jpg", "images/flower.jpg","images/smile.jpg", "images/square.jpg", "images/submarine.jpg", "images/elk.jpg", "images/train.jpg", "images/cactus.jpg", "imagesbullseye.jpg", "images/house.jpg" ];
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

//have to create a random array for the images to display at random. this from homework examples folder 
/*function cardRandom()
{

    
        // array to count positions-5-and make sure only can go up to being displayed twice
    let num = [0,0,0,0,0];
        ///using while makes sure the condition is true and will loop
    while(actualCards.length < 10)
        {
             // this creates a random flip through the images as many times as there are images
            let randomNumber = Math.floor(Math.random() * actualImages.length)
        
            ///this says if the total random number shown is less than two ------------only allows for no more than two of same image to be displayed
            if(num[randomNumber] < 2)
            {
                actualCards.push(actualImages[randomNumber]);
                // then add one to the array that makes sure only two images can be added
                //this i'm not sure of ???????
                num[randomNumber] = num[randomNumber] + 1;
            }
        }  
}*/



/*this is me trying to come up with how to create a random function but I after many hrs I'm not  figuring it out on my own,  I reference your function in the examples
for the homework --- I don't understand how to apply loops to get things to work....--------*/

function cardRandom()
{
  
    //let randomNumber = Math.floor(Math.random() * actualImages.length );

        for (let i = 0; i < actualImages.length; i ++)
                {
                    actualCards.push(actualImages[i]);
                }
                //console.log("this shit sucks!");
}


//uses flip function from html and uses 'parameters' from there

function flip(number)
{
    document.getElementById(blankIds[number]).src= actualCards[number];  
}

