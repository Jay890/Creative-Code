class gameOver {
  constructor() {
  this.gamerOverMessage = "Game over, fainted from fatigue";
  }
  
  /* Game over screen is loaded when energy level is 0 or less      than 0, displaying game over message */
  gameOverScreen() {
  textSize(30);
  textAlign(CENTER, CENTER);
  textFont(titleFont);
  text(this.gamerOverMessage, width / 2, height / 2);
  }
}


