class Umbrella {
  constructor(x, y) {
      var options = {
          restitution: 1,
          friction: 0.5,
          isStatic:true
      }
      this.r = 50;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("walking_1.png");
      
      this.width=400,
      this.height=400;
      World.add(world, this.body);
  }
  display() {

      var pos = this.body.position;
      var angle = this.body.angle;

      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
      
  }
}