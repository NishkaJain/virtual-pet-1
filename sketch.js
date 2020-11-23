//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload(){
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
	
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog = createSprites(200,200);
  dog.addImage(dog);
  
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

