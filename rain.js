class rain {
    constructor(x,y) {
      var options = {
        friction: 0,
          restitution: 0,
          isStatic: false
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 10
      World.add(world, this.body);
     // this.body.velocityY = 5
    }
    display(){
      // console.log(this.body.speed)
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.position.x>405){
      //  Matter.body.setLifetime(this.body, 500)
      }      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("blue")
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };
