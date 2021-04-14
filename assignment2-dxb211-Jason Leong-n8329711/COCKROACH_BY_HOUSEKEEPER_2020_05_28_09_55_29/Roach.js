class Roach {

  constructor(x, y) {
    this.loc = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(0.8);
    this.isAlive = true;
  }

  update() {
    if (this.isAlive) {
      this.loc.add(this.vel);

      /* Checks cockroaches is in width bounds on the canvas 
      minus size of the cockroachimage */
      if (this.loc.x < 0 || this.loc.x > width - 30) {
        this.vel.x = -this.vel.x;
      }

      /* Checks cockroaches is in height bounds on the canvas 
      minus size of the cockroachimage */
      if (this.loc.y < 0 || this.loc.y > height - 30) {
        this.vel.y = -this.vel.y;
      }
    }
  }

  /* Check the distance for the mouse, used with cockroach images 
  in the sketch.js in mousePressed() */
  roachSwatted(mouseX, mouseY, swatDistance) {
    return dist(this.loc.x, this.loc.y, mouseX, mouseY) <
      max(20, swatDistance);
  }

  //Display a cockroach image at loc.x and loc.y vector positon 
  createRoach() {
    push();
    translate(this.loc.x, this.loc.y);
    image(roachImage, 0, 0, 30, 30);
    pop();
  }
  /*Display a family cockroach image at loc.x and loc.y vector 
  positon */
  createFamilyRoach() {
    push();
    translate(this.loc.x, this.loc.y);
    image(roachImageTwo, 0, 0, 30, 30);
    pop();
  }
}