class gameWin {
  constructor() {
    this.parasiteMoviePoster = loadImage('data/parasite-poster.jpg');
  }
  
  displayPoster () {
    image(this.parasiteMoviePoster, 0, 0, width, height);
  }
}