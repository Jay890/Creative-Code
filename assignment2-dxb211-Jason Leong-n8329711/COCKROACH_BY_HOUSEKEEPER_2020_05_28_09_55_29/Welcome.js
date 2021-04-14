class Welcome {
  constructor() {
    this.title = "COCKROACH";
    this.houseImage = loadImage('data/modern-house.jpg');
    this.author = "A GAME BY THE HOUSEKEEPER\n GOOK MOON-GWANG";
    this.cockroachImageSide = loadImage('data/cockroach-side.png');
    this.rules = createP("Housekeeper Gook moon-gwang has energy level and each mouse pressed will decrease that energy. Elimate the 'cockroaches' to win the game. Be precise in the swatting!");
  }

  //Initial screen that displays welcome message and rules 
  greetingMessage() {
    fill("FFFFFF");
    textFont(titleFont);
    textSize(70);
    textAlign(CENTER, TOP);
    text(this.title, width / 2, height / 1.5);
    textAlign(CENTER, BOTTOM);
    textSize(20);
    text(this.author, width / 2, height / 1.1);
    image(this.cockroachImageSide, width / 10, height / 1.1, 40, 40);
  }
}