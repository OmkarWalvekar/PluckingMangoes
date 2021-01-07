class Chain {
    constructor(bodyA,bodyB) {

        var opts = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.3,
            length : 15

        }

        this.chain = Constraint.create(opts);
        World.add(world, this.chain);
    }
    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;


        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    } 

     //Making The "Fly" function   
     fly()
     {
         this.chain.bodyA = null;
     }

}
