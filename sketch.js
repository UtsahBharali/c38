var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var imageCar1;
var imageCar2;
var imageCar3;
var imageCar4;
 var imageTrack;
 var imageGround;

function preload(){
   imageCar1 = loadImage("../images/car1.png");
   imageCar2 = loadImage("../images/car2.png");
   imageCar3 = loadImage("../images/car3.png");
   imageCar4 = loadImage("../images/car4.png");
   imageTrack = loadImage("../images/track.png");
   imageGround = loadImage("../images/ground.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}




function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }


}
