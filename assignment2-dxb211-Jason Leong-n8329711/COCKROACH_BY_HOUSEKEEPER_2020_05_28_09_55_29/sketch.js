/* COCKROACH BY HOUSEKEEPER
 * This sketch is a game promoting the movie Parasite. 
 * The movie that is being promoted is Parasite. Parasite is a
 * thriller/comedy that was released in 2019 and directed by Bong
 * Joon-Ho. The story revolves around Ki-woo; a university
 * student. Who is asked by his friend Min, to help tutor Mins' 
 * student; Da-hye. While Min is overseas.
 *
 * Jason Leong n8329711
 *
 * References
 * Studio 9: Working with Movement
 * https://editor.p5js.org/creativecoding/sketches/bb-OdgZsS using
 * constructor() and update() functions
 * https://editor.p5js.org/creativecoding/sketches/T5MF69IEL using 
 * functions wasClicked(), show() and mousePressed()
 * https://p5js.org/examples/dom-input-and-button.html
 * https://p5js.org/reference/#/p5/keyCode
 * Font Playfair Display Medium - https://fonts.google.com/specimen/Playfair+Display?selection.family=Playfair+Display:wght@500
 * Sad pink female avatar:
 * https://freesvg.org/vector-drawing-of- sad-pink-female-avatar
 * Smiling pink female avatar:
 * https://freesvg.org/vector-image-of-smiling-pink-female-avatar
 * Laminate floor by Geralt:
 * https://pixabay.com/illustrations/parquet-laminate-floor-wall-boards-583691/
 * House image:
 * https://pixabay.com/illustrations/house-trumpet-smoke-rpg-game-2809562/ by creozarv
 * Photo Credit: Module 2 Modern house part 5 - grass by  
 * monkeywing. Attribution 2.0 Generic (CC BY 2.0) monkeywing
 * https://www.flickr.com/photos/colinsite/30216225774
 * Parasite movie poster. Image belongs to Parasite company.
 * https://www.parasite-movie.com/
 * Photo by Callum Hill on Unsplash
 * https://unsplash.com/photos/dGa5tfaco5s
 */

var roachInvestation = [];
var familyRoach = [];
//Variables for the classes
var roachClass, gameIntroduction, loadGameOver, gameWinner;
var roachImage, roachImageTwo, cockroachImageSide, cockroachImageTop, kitchenImage, houseImage, parasiteMoviePoster;
var startGame;
var gameState = "startScreen"; //Default game state
var titleFont;
var energyScore = 110; //Default Energy level of person 
var backgroundColor = "#7395AE";
var eneryTextColor = "darkgreen";
var energyDrain = 15;
var canvasWidth = 600;
var canvasHeight = 600;
var numFamilyRoach = 5;
var numNormalRoach = 10;
var familyRoachCounter = 4;

function preload() {
  roachImage = loadImage('data/cockroach-side.png');
  roachImageTwo = loadImage('data/cockroach-top.png');
  titleFont = loadFont('data/PlayfairDisplay-Medium.ttf');
  houseImage = loadImage('data/modern-house.jpg');
  kitchenImage = loadImage('data/kitchen.jpg');
  cockroachImageSide = loadImage('data/cockroach-side.png');
  cockroachImageTop = loadImage('data/cockroach-top.png');
  parasiteMoviePoster = loadImage('data/parasite-poster.jpg');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  strokeWeight(5);
  //Creating button to start game and loading level one code
  startGame = createButton("Start Game");
  startGame.mousePressed(loadLevelOne);

  //Create object instances of the following classes
  roachClass = new Roach();
  gameIntroduction = new Welcome();
  loadGameOver = new gameOver();
  gameWinner = new gameWin();

  loopRoach();

}

function draw() {
  background(backgroundColor);
  //Performs code when gameState is set to startScreen (default)
  if (gameState == "startScreen") {
    image(this.houseImage, 0, 0, width, height);
    gameIntroduction.greetingMessage();
  }
  /*If the gameState is equal to missionOne load mission one
   by pressing the left arrow key */
  if (gameState == "missionOne") {
    loadMissionOne.missionOneMessage();
    loadMissionOne.keyPressed();
  }

  //Performs code when gameState is set to levelOne 
  if (gameState == "levelOne") {
    background(kitchenImage);
    /*Loops to load the cockroach images and move family     
    cockroaches   and normal cockroaches around canvas */
    for (let rTwo of familyRoach) {
      rTwo.update();
      rTwo.createFamilyRoach();
      for (let r of roachInvestation) {
        r.update();
        r.createRoach();
      }
    }
    //Check if the players score is 0 or less. If so game over
    if (energyScore <= 0) {
      gameState == "gameOver";
      loadGameOver.gameOverScreen();
    }
    energyLevel();
  }
  if (familyRoachCounter == 0) {
    gameState == "winner";
    loadGameWin();
  }
}

/* Creates roaches based on numFamilyRoach variable at random position within the canvas */
function loopRoach() {
  for (var j = 0; j < numFamilyRoach; j++) {
    familyRoach.push(new Roach(random(1, width), random(1, height)));
  }
  /* Creates roaches based on numNormalRoach variable at random position within the canvas */
  for (var i = 0; i < numNormalRoach; i++) {
    roachInvestation.push(new Roach(random(1, width), random(1, height)));
  }
}

/* Check if the mouse is pressed on cockroach images will check if alive if it is remove it from array as long as energyScore variable is greater than 0 */
function mousePressed() {
  if (energyScore > 0) {
    for (var j = familyRoach.length - 1; j >= 0; j--) {
      if (familyRoach[j].roachSwatted(mouseX, mouseY, 20)) {
        familyRoach[j].isAlive = false;
        familyRoachCounter -= 1;
      }
    }

    for (var i = roachInvestation.length - 1; i >= 0; i--) {
      if (roachInvestation[i].roachSwatted(mouseX, mouseY, 20)) {
        roachInvestation[i].isAlive = false;
      }
    }
    //Each click drains housekeepers energy by set amount at 15
    energyScore -= energyDrain;
  }
}

//Display the current energy level in top left
function energyLevel() {
  fill(eneryTextColor);
  stroke(10);
  text("Energy: " + energyScore, width / 5, 30);
}

//Used to change the game state to begin level one stage
function loadLevelOne() {
  gameState = "levelOne";
}

/*Used to change the game state to winner and display Parasite 
movie poster */
function loadGameWin() {
  gameState = "winner";
  gameWinner.displayPoster();
}