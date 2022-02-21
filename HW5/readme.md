      ///array to go with the id's tag
    let imageTags = ["pic01", "pic02", "pic03", "pic04", "pic05"];
  //the "back of the cards"
    let backImage = "./images/back.jpg";

    console.log("tst 02");
    let actualImages = new Array();



    ///this function 
    function printBack()
    {


        ///calling the random function inside the printBacks function
        //createRandom();

        /////this is so the backs of cards show up
            for(var i=0; i < imageTags.length; i++)
            {
                ////this sets the back image as the source
                document.getElementById(imageTags[i]).src = backImage;
            }
       
    }

    function createRandom()
    {
        //this is the real images array indexed with thier names
        let realImages = ["./images/clover.jpg", "./images/flower.jpg", "./images/smile.jpg", "./images/square.jpg", "./images/submarine.jpg"]
        //this lets me see if that images only get added twice--because only have 5 images
        let count = [0,0];

        while(actualImages.length < 10)////says while actualImages is less than 4 ----use 4 b/c starts from 0 & counts up
        {
            ////do this--makes the random Number equal  random * #of real images
            let randomNumber = Math.floor(Math.random() * realImages.length)
            ///and if 
                if(count[randomNumber] < 2)
                {
                    //do this--adds
                    actualImages.push(realImages[randomNumber]);
                    //then 
                    count[randomNumber] = count[randomNumber] + 1;
                }
        }
    }
     

    function flipping(number)
    {
        document.getElementById(imageTags[number]).src = actualImages[number];
    } 