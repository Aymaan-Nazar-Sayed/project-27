class Chain{
    constructor(bodyA,bodyB,ofsetx,ofsety){
        this.ofsetx=ofsetx;
        this.ofsety=ofsety;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,

            pointB:{x:this.ofsetx,y:this.ofsety},
            
            
        }
        
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){
      var pointA=this.sling.bodyA.position
      var pointB=this.sling.bodyB.position
      strokeWeight(3);

        line(pointA.x,pointA.y,pointB.x+this.ofsetx,pointB.y+this.ofsety)
    }
}