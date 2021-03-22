class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            'restitution':0.3,
            'friction':0.2,
            'density':1.2			
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.width = 60 ;
        this.height = 60;
		this.body=Bodies.circle(x, y, r, options);
        this.image = loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos = this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			imageMode(CENTER);
			image(this.image,0,0,this.width,this.height);
			
			pop()
			
	}

}