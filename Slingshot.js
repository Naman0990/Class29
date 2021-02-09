class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1 = loadImage ("sprites/sling1.png")
        this.sling2 = loadImage ("sprites/sling2.png")
        this.sling3 = loadImage ("sprites/sling3.png")
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            image(this.sling1,268,29)
            image(this.sling2,238,22)
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            if(pointA.x<250){
                strokeWeight(7);
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y+10);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y+10);
                image(this.sling3,pointA.x-25, pointA.y-10,5,25)
                
            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y+10);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y+10);
            image(this.sling3,pointA.x+25, pointA.y-10,5,25)
            }
            
        }
    }
    
}