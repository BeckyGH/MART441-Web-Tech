var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    //need to add physics for jumping, falling, etc
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

//>>>>>>>>>>>>>>>VARIABLES NEEDED>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//need variable to create a player
let player;
let bubbles;
let fruits;
//have to create a variable for the platforms to add them
let platforms;
let cursors;
let score = 0;
let scoreText;
let bombs;
let spaceKey;
//timer
var text;
var timedEvent;
let gameOver = false;
//variable to set up the game
let game = new Phaser.Game(config);


//the preload is like previous create functions/loads everything to the page
function preload ()
{
    this.load.image('sky', 'assets/background-red.png');
    //this.load.image('mountains', 'assets/asteroids.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('bubble', 'assets/bubble.png');
    this.load.image('fruit', 'assets/cherries.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('stormlord-dragon96x64', 'assets/stormlord-dragon96x64.png', { frameWidth: 32, frameHeight: 48 });
}


///the create function is the same as the draw function/over and over
function create ()
{
    //this adds the sky background
    this.add.image(400, 300, 'sky');
    //this.add.image(400, 500, 'mountains');

    //this is how to add the platforms/have to add to abubbles first/gives ability to say what happens to one happen to all of them
    platforms = this.physics.add.staticGroup();
    //set scale- it resets what happens to them all and platform is positioned based on x,y coordinates
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(320, 410, 'ground');
    platforms.create(670, 300, 'ground');
    platforms.create(40, 180, 'ground');
    platforms.create(800, 145, 'ground');


    //this is going to create a player-goes through a sprite sheet and physics
    player = this.physics.add.sprite(100, 250, 'stormlord-dragon96x64');
    player.setBounce(0.2);
    //ie cant leave the world/bounce around the world
    player.setCollideWorldBounds(true);

    //these are the animations that get called for the player
    this.anims.create({
        key: 'left',
        //this calls the frames starting at 0 then goes up to 3
        frames: this.anims.generateFrameNumbers('stormlord-dragon96x64', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: 'turn',
        frames: [{key: 'stormlord-dragon96x64', frame: 4}],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('stormlord-dragon96x64', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });
   
      //this is to GET they keys-goes in create to get them
      cursors = this.input.keyboard.createCursorKeys();
      //adding spacebar for jumps
      spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //adding bubbles and distributing them on the canvas-- bouncing them
    bubbles = this.physics.add.group({
 
        key: 'bubble',
        repeat: 7,
        setXY: { x: 100, y: 0, stepX: 90 },
     
    });

    bubbles.children.iterate(function (child)
     {
        child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.8));
        child.setGravityY(100);
    });

    // ADDING THE CHERRY>>>>>>>>>>>>>>
    fruits = this.physics.add.group(
    {
 
        key: 'fruit',
        repeat: 0,
        setXY: { x: 120, y: 0, stepX: 70 },

    });

    fruits.children.iterate(function (child)
    {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        child.setGravityY(100);
    });

    //adding bombs to the canvas
    bombs = this.physics.add.group();

    //adding score text to the canvas
    scoreText = this.add.text(16,550, 'Score: 0', {fontSize: '30px', fill: 'white'});
    //timer added to canvas
    text = this.add.text(600, 0, 'Timer:',{fontSize: '30px', fill: 'white'} );
    timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, repeat: 30 });

    //collide the player and the bubbles with the platforms
    this.physics.add.collider(player, platforms);
    //make bubbles stop on platforms
    this.physics.add.collider(bubbles, platforms);
    //make fruit stop on platform
    this.physics.add.collider(fruits, platforms);
     //bombs stop on platforms
     this.physics.add.collider(bombs, platforms);
  
    //when player and bubbles "overlap" they are taken away(collected)
    this.physics.add.overlap(player, bubbles, collectBubble, null, this);
    this.physics.add.overlap(player, fruits, collectFruit, null, this)
    //check to see if player collides with bomb and if does gameover
    this.physics.add.collider(player,bombs, hitBomb, null, this);

}

//update gets called repeatedly
function update ()
{
    //add in to make the game stop 
    if(gameOver)
    {
        //this.scene.restart();
        return;
    }
    //player movement happens here, so it can get called each frame/can press keys and change velocity of player
    if(cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if(cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if(spaceKey.isDown && player.body.touching.down)
    {
        player.setVelocity(-330);
    }
 
    text.setText( '\nTimer: ' + timedEvent.repeatCount );
   
}

///function to take away bubbles when overlap
function collectBubble(player, bubble)
{
    bubble.disableBody(true, true);
    //making score go up when bubbles are "collected"
    score++;
    scoreText.setText('Score:' + score);

    if (bubbles.countActive(true) === 0)
    {
        //  A new batch of bubbles to collect
        bubbles.children.iterate(function (child) {

        child.enableBody(true, child.x, 0, true, true);

    });
        //saying if the x is less than 400 make sure it's between the number 
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        //then create bomb at x location and drop them
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }
     if(fruits.countActive(true) === 0)
    {
        //  A new batch to collect
        fruits.children.iterate(function (child) {

        child.enableBody(true, child.x, 0, true, true);

        });
    }
}

function collectFruit(player, fruit)
{
    fruit.disableBody(true, true);
    //making score go up when bubbles are "collected"
    score+=10;
    scoreText.setText('Score:' + score);
 
}


function hitBomb (player, bomb)
{
    //we pause physic
    this.physics.pause();
    //makes player turn red
    player.setTint(0xff0000);

    player.anims.play('turn');
    //game over is true so it stops
    gameOver = true;
    
}

       
function onEvent ()
{
    if(timedEvent.repeatCount == 0 )
    {
        gameOver = true;
        //this.game.restart();
        
    }
}

