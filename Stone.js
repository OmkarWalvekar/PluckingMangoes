class Stone{
    constructor(x,y,radius) {
     var opts_body = {
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2,
        
     }  

     this.image = loadImage("stone.png");
     this.body = Bodies.circle(x,y,radius,opts_body);
     this.r = radius;
    World.add(world, this.body);

    }

    display() {

      fill("black");

        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r);

    }

   
}