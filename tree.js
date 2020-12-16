class Tree {
    constructor(x,y,width,height) {
      this.x = x
      this.y = y
      this.width = width;
      this.height = height;

      var options = {
          isStatic:true,
      }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.image=loadImage("Plucking mangoes/tree.png")
      World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.height,this.width);
        pop();
    }
}