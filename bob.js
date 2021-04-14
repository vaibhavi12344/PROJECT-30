class Bob{
    constructor(x,y,radius){
    

    var options={
    'isStatic':false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
    }
    this.body=Bodies.circle(x,y,radius,options)
    
    this.width=width;
    this.height=height;
    
    World.add(world,this.body)
    }
    display(){
    circle(this.x,this.y,this.radius)
    }
    }