var canvas, backgroundImage;
var gun,gun2,gunImg,gun2Img
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var bullet2
var form, player, game;

var player1Img ,player2Img, backgroundImg
var player1,player2
var players
var bullet

function preload(){
player1Img = loadImage("player1.png")
player2Img = loadImage("player2.png")
backgroundImg = loadImage("background.png")
gun2Img = loadImage("gun2.png")
gunImg = loadImage("gun.png")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();

  game = new Game()
  game.getState()
  game.start()

}


function draw(){
  if (playerCount === 2){
    game.update(1)
  }
  if ( gameState===1){
    clear()
    game.play()
  }
  if (gameState===2){
    game.end()
  }



}
