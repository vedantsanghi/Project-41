class Man {
    constructor() {
      var options = {
          restitution: 0.04,
          isStatic: true
      }
      this.body = Bodies.rectangle(200,300,100,100,options);
      this.width = 100
      this.height = 100
      World.add(world, this.body);
     // this.body.velocityY = 5
    }
    display(){
      var pos =this.body.position;
    //   var angle = this.body.angle;
//       if(this.body.position.x>405)
// {
//     this.body.position.y = 0
// }      
     push();
    //   translate(pos.x, pos.y);
    //   rotate(angle);
     // fill("blue")
    //   rectMode(CENTER);
    // rect(200,300,100,100);
      image(manImg,pos.x, pos.y, this.width,this.height);
      pop();
    }
  };
