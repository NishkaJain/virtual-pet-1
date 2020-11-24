//Create variables here
var dog, dogImg;
var happyDog;
var database;
var foodS;
var foodStock;

function preload(){
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
	
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog = createSprite(200,200);
  dog.addImage(dogImg);
  
}


function draw() { 
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  } 

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}

