class Bob {
    constructor(x,y,r) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x,y,r, options);
      this.r = r
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle
  
      ellipseMode(CENTER);
      fill(pink);
      strokeWeight(4)
        stroke("pink")
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };
  