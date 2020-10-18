class Block {
  constructor(x, y, width, height,angle){
    var options = {
        'restitution':0.4
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){ 
    var angle= this.body.angle;
    push();
    var pos = this.body.position;
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}