class SlingShot{
    constructor(bodyA, pointB){ //constructor takes one body and a point that the chain should connect
        var options = {
            bodyA: bodyA, //assign bodyA to bodyA
            pointB: pointB, //assign pointB to pointB
            length: 10, //assign the length of the sling
            stiffness: 0.04 //assign the stiffness of the sling
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options); //create sling using Constraint
        World.add(world, this.sling); //adding the sling into the world
    }

    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position; //take the position of bodyA as pointA
            var pointB = this.pointB; //take the position of pointB as pointB
            line(pointA.x,pointA.y,pointB.x,pointB.y); // draw a line between pointA and pointB
        }
        

    }
}