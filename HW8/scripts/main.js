
var newArt = new Array();


class Art
 {
        constructor(selector, imagePath){
            this.selector = selector; 
            this.imagePath = imagePath;
        }

        get theSelector(){
            return this.selector;
        }

        get theImagePath()
        {
            return this.imagePath;
        }

}

function makingArray() 
{

    let purpleFlower = new Art ("#purpleFlower", "./images/purpleFlower.png");
    let yellowFlower = new Art ("#yellowFlower", "./images/yellowFlower.png");
    let whiteFlower = new Art ("#whiteFlower", "./images/whiteFlower.png");
    let bee = new Art ("#beePic", "./images/bee.png");

        newArt.push(purpleFlower);
        newArt.push(yellowFlower);
        newArt.push(whiteFlower);
        newArt.push(bee);
}

//---------------beginning of jquery----------->>>>>>>>>>>>
$(document).ready(function() 
{
    makingArray();
        $(newArt[0].theSelector).attr("src", newArt[0].theImagePath);
        //document.getElementById("#purpleFlower").innerHTML = $(newArt[0].toString());
        $(newArt[1].theSelector).attr("src", newArt[1].theImagePath);
        $(newArt[2].theSelector).attr("src", newArt[2].theImagePath);
        $(newArt[3].theSelector).attr("src", newArt[3].theImagePath);

    //---starting onclick actions
    $("button").click(function()
    {
        //----first text --set var value--jsut trying a different way to set it up
        var text = $("#text01");  

        text.fadeIn(1500).animate({
            fontSize: "1.7em",
            left: "40%"},
            {
                duration: 2000,
                easing: "linear",
            }).fadeOut(4000);

        //----second text 
        $("#text02").delay(3000).fadeIn(2000).animate({fontSize: "1.5em"}).fadeOut(4500);

//-------------animate bee image
        $("#beePic").fadeIn(2000).animate({
            right: "70%",
            height: 'auto',
            width: '20%',
            margin: "+=50px" }, 
            {
                duration: 4000,
                easing: "linear",
            }).fadeOut(1000);

//------------animate flower images 
        $("#yellowFlower").show(900).fadeIn(800).animate({
            right: '10%',
            height: 'auto',
            width: '+=8%'},
            {
                 duration: 1500,
                easing: "linear",
            }).fadeOut(2000);

        $("#purpleFlower").fadeIn(3000).animate({
            right: '40%',
            height: 'auto',
            width: '20%'},
            {
                duration: 2000,
                asing: "linear",
            }).fadeOut(2000);

        $("#whiteFlower").show(6000).fadeIn(900).animate({
            left: '45%',
            height: 'auto',
            width: '+=5%'},
            {
                duration: 2000,
                easing: "linear",
            }).fadeOut(1000);

 
//-------moving the circles after a set time
        setInterval(moveCircle, 9000);
   
    });
});


function moveCircle()
{
    /*---first movement attempt
    $("#circle").animate({left: '80%'}).animate({top: '55%'}, "slow").animate({left: '15%'}, "slow").animate({top: '10%'}, "slow").fadeOut(1000);
    $("#circle02").animate({right: '80%'}).animate({top: '55%'}, "slow").animate({right: '15%'}, "slow").animate({top: '10%'}, "slow").fadeOut(1000);
    */
    $("#circle").animate({left: '80%'}).animate({top: '6em'}, "slow").fadeOut(1000);
    $("#circle02").animate({right: '80%'}).animate({top: '6em'}, "slow").fadeOut(1000);
}