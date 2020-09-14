class Slingsshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:1
        }
        this.sling = Constranit.create(options);
        this.pointB=pointB;
        AudioWorkletNode.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointb = this.pointB;

            strokeWeight(4);
            stroke("turquoise");
            SVGPathSegLinetoAbs(pointA.x, pointA,y, pointB.x,pointB.y);
        }
    }
}