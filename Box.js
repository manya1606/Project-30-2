class Box {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
      this.visibility = 255
    }

    display(){
      var angle = this.body.angle;

      if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
      
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);

      if(pointA.x < 220) {
        strokeWeight(7);
        line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
        line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
        image(this.sling3,pointA.x -30, pointA.y -10,15,30);
    }
    else{
        strokeWeight(3);
        line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
        line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
        image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
    }
      pop();
    }
  }
}

