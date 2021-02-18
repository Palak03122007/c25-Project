class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, r, options);
      this.image = loadImage("paper.png");
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("blue");
      image(this.image,10,0,this.r);
      this.image.scale = 2;
      pop();
    }
  };