
class Square{
    constructor(x, y, height, width, color)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }
  
    setX(x)
    {
       this.x = x;
    }
    setY(y)
    {
       this.y = y;
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
        this.color = color;
    }

    get theX()
    {
        return this.x;
    }
    get theY()
    {
        return this.y;
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

  
}
//--------------variables
let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");

let x = 50;
let y = 50;
let x2 = 100;
let y2 = 100;

let square1;
let square2;

let movement = 50;

///----calls

createSquares();
setInterval(update, 500);

/*---------start of functions/jquery--------*/
function update()
{
drawSquare();  
moveRect();
changes();

}

 function createSquares()
 {
    square1 = new Square(x,y,100,100, "green");
    square2 = new Square(x2,y2,75,50,"pink");
 }      


function drawSquare()
{
  ctx.clearRect(0,0,800,600);
  ctx.fillStyle = square1.theColor;
  ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
 
  ctx.strokeStyle = square2.theColor;
  ctx.strokeRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

}
/*-----------START OF JQUERY*/
$(document).ready(function()
{
   
    $(this).keydown(function(event)
    {
        getKey(event);
    });

    $("#audiochange").click(function()
    {
        updateAudio();
    });
    $("#canvasBox").fadeIn(2000);


});

function updateAudio()
{
    $("#song").attr("src", "./media/nextgen.mp3")
}

/*-----------------MOVEMENT OF "PINK" RECTANGLE----------*/
function moveRect()
{
   
    if(square2.theX <=15 || square2.theX >= 600 )    
    {
        movement *= -1;
        console.log("movement");
    }
        square2.setX(square2.theX + movement);
      
    if (square2.theY <=0 || square2.theY >= 500)
        {
            
            movement *= -1;
        }
        square2.setY(square2.theY + movement);
   
        //square2.setY(Math.floor(Math.random()* 10) * movement_;
        //console.log("movement");
    if(square1.theX > 700 || square1.theX <10 && square1.theY > 500 || square1.theY < 10)
    {

    }
}


/*-------------------KEY EVENTs----USING ARROW KEYS----------*/
function getKey(event)
{
  
    let didCollide = hasCollided(square1, square2);
    //console.log("did collide" + didCollide);
    if(!didCollide)
    {
        if(event.keyCode == 39 && square1.theX < 780) 
        {
            ///move right
            square1.setX(square1.theX + 10);
        } 
        else if(event.keyCode == 37 && square1.theX > 0) 
        {
            //move left
            square1.setX(square1.theX -10);
        } 
        else if(event.keyCode == 38 && square1.theY > 0) 
        {
            ///move up
            square1.setY(square1.theY - 10);
        } //uppåt pil
        else if(event.keyCode == 40 && square1.theY < 580) 
        {
           //move down
            square1.setY(square1.theY + 10);
        }

    }
    else 
    {
     changes();
    }

    drawSquare();
}


/*-------->>>>>>>>>>CHANGES in colors/size for rect and background---------*/
function changes()
{
    let didCollide = hasCollided(square1, square2);
    if(didCollide)
    {
        //------NUMERO 1
        square1.setColor("white");
        square1.setWidth(50);
        square1.setHeight(50);

        //-----NUMERO 2
        square2.setColor("purple");
        square2.setWidth(100);
        square2.setHeight(75);
        document.getElementById("myCanvas").style.background = "aqua"; 
    }
     if (!didCollide)
    {
        //------NUMERO 1
        square1.setColor("green");
        square1.setWidth(20);
        square1.setHeight(20);
        ///-----NUMERO 2
        square2.setColor("pink");
        square2.setWidth(75);
        square2.setHeight(50);
      
        document.getElementById("myCanvas").style.background = "black";
    }
}

function hasCollided(square1, square2) {
    return !(
        ((square1.y + square1.height) < (square2.y)) ||
        (square1.y > (square2.y + square2.height)) ||
        ((square1.x + square1.width) < square2.x) ||
        (square1.x > (square2.x + square2.width))
    );
}