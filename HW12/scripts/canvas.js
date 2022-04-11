class Shapes{

    constructor(xAxis, yAxis, height,width, color, status)
    {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.height = height;
        this.width = width;
        this.color = color;
        this.status = status;
      
    }

    get theX()
    {
        return this.xAxis;
    }

 
    get theY()
    {
        return this.yAxis;
    }
   

    get theHeight()
    {
        return this.height;
    }

    get theWidth()
    {
        return this.width;
    }
    get theColor()
    {
        return this.color;
    }
    get theStatus()
    {
        return this.status;
    }
    
    setX(x)
    {
        this.xAxis = x;
    }
    setY(y)
    {
        this.yAxis = y;
    }
    setHeight(height)
    {
        this.height = height;
    }
    setWidth(width)
    {
        this.width = width;
    }
    setColor(color)
    {
        this.color= color;
    }
    setStatus(status)
    {
        this.status = status;
    }
   
    
}

let canvas; 
let ctx;
let x = 50;
let y = 50;
let player;
let firstSquare;
let firstRect;
let direction;
let collection = 0;
let squareArray = [];
let rectArray =[];

setInterval(update, 10);

$(document).ready(function()
    {
        createShapes();
     
        $(this).keypress(function(event){
             getKey(event);
        
            });
        
    });


function update()
{
drawShapes();
}

//>>>>>>>>>>>>>>>>>>>>>>>>>CREATING THE OBJECTS 
function createShapes()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
     // creating objects
     player = new Shapes(50,50,50,50,"orange");  
     firstSquare = new Shapes(400, 100, 75, 75, "red");
     firstRect = new Shapes(10, 575, 60, 10, "purple", 1);

    // start of jquery
    $.getJSON("/data/firstSquares.json", function(data) {
        for(let i = 0; i < data.squares.length; i++)
        {
         squareArray.push(new Shapes(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawShapes();
    });   
    
    $.getJSON("/data/secondRect.json", function(data) {
        for(let i = 0; i < data.rect.length; i++)
        {
            rectArray.push(new Shapes(data.rect[i].x,data.rect[i].y, data.rect[i].h, data.rect[i].w, data.rect[i].color));
        }
        drawShapes();
       
    });
    
    
}
//DISPLAY SCORE 
function score()
{
  //DRAWING SCORE ON CANVAS
  ctx.font = "34px Impact";
  ctx.fillStyle = "black";
  ctx.fillText("score: " + collection, 650, 575);

}

//-------DRAWING THE OBJECTS ON CANVAS---------------------
function drawShapes()
{
     
   ctx.clearRect(0,0,800,600);
    //PLAYER "orange" SQUARE
    ctx.fillStyle = player.theColor;
    ctx.fillRect(player.theX, player.theY, player.theHeight, player.theWidth);
    //SQUARE
    ctx.fillStyle = firstSquare.theColor;
    ctx.fillRect(firstSquare.theX, firstSquare.theY, firstSquare.theHeight, firstSquare.theWidth);
    //ARRAY of objects
    for(let i = 0; i < squareArray.length; i++)
            {
                ctx.fillStyle = squareArray[i].theColor;
                ctx.fillRect(squareArray[i].theX, squareArray[i].theY, squareArray[i].theWidth, squareArray[i].theHeight);
            }
  
    for ( let r= 0; r < rectArray.length; r++)
    {
        ctx.fillStyle = rectArray[r].theColor;
        ctx.fillRect(rectArray[r].theX, rectArray[r].theY, rectArray[r].theWidth, rectArray[r].theHeight, rectArray[r].theStatus);
    }
    //RECTANGLE
    if( firstRect.theStatus == 1)
    {
        ctx.fillStyle = firstRect.theColor;
        ctx.fillRect(firstRect.theX, firstRect.theY, firstRect.theHeight, firstRect.theWidth);
    }
    score();
}


//-------------------KEY EVENTS FOR PLAYER 
function getKey(event)
{

   let char = event.which || event.keyCode;
   let actualLetter = String.fromCharCode(char);
    if(actualLetter == "w" && player.theY > 0 )
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s" && player.theY < 550)
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a" && player.theX > 0)
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d" && player.theX < 750)
    {
        moveRight();
        direction = "right";
    }
    //>>>>>>>>>>>>.TESTING FOR SQUARE ARRAY COLLISION........................
   let collision1 = hasCollided(player,firstSquare);
   let testing1 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        testing1 = hasCollided(player,squareArray[i]);
        if(testing1 == true)
        {
            break;
        }
        
        //console.log(testing2);
    }
    if(collision1 || testing1)
    {
    
        if(direction == "left")
        {
            moveRight();
            //player.setX(player.theX+=10);
        }
        else if(direction == "right")
        {
            moveLeft();
            //player.setX(player.theX-=10);
        }
        else if(direction == "up")
        {
            moveDown();
            //player.setY(player.theY +=10);
        }
        else if(direction == "down")
        {
            moveUp();
            //player.setY(player.theY-=10);
        }
       
    }
   
    drawShapes(); 
    rectCollision();
    firstRectCollision();
 
}

function moveUp()
{
    player.setY(player.theY-=10);
}
function moveDown()
{
    player.setY(player.theY +=10);
}
function moveRight()
{
    player.setX(player.theX+=10);
}

function moveLeft()
{
    player.setX(player.theX-=10);
}

//>>>>>>>TESTING TO COLLIDE WITH PURPLE RECTS/ MAKES THEM DISAPPEAR AND ADD SCORE>>>>>>>>>>>>>>>>>>>

function rectCollision()
{
    //--------test2 false 
   let collision2 = false;
  
   //console.log(rectArray.length);
   for(var r = 0; r < rectArray.length; r++)
   {

           collision2 = hasCollided(player,rectArray[r]);
           if(collision2 == true )
           {
               collection ++;
               rectArray.splice(r,1);
               break;
           }
   }
   //console.log(rectArray.length);
}


 function firstRectCollision()
 {
    test2 = hasCollided(player,firstRect)
    if(test2 == true && firstRect.theStatus ==1)
    {
        collection ++;
        firstRect.setStatus(firstRect.theStatus = 0);
    }
 }

function hasCollided(object1, object2) {
    return !(
        ((object1.yAxis + object1.height) < (object2.yAxis)) ||
        (object1.yAxis > (object2.yAxis + object2.height)) ||
        ((object1.xAxis + object1.width) < object2.xAxis) ||
        (object1.xAxis > (object2.xAxis + object2.width))
    );
}
