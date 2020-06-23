class rope {
    constructor(offsetX,offsetY,body1,body2) {
      
        this.offsetX=offsetX
        this.offsetY=offsetY
    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX , y:this.offsetY}
}

    this.rope = Constraint.create(options)
    World.add(world, this.rope)

    }

    display()

    var = this.body.bodyA.position
    var = this.body.bodyB.position

    strokeWeight();

    var Anchor1X=pointA.x
    var Anchor1y=pointA.y

    var Anchor2X=pointB.x+offsetX
    var Anchor2Y=pointB.y+offsetY

    line(Anchor1X,Anchor1y,Anchor2X,Anchor2Y)


  
  