class Paper{
	constructor(x,y,r)
	{
	var options={
		restitution:0.3,
		friction:0,
		density:1.2 
	}
    this.image = loadImage("paper.png")
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var Paperpos=this.body.position;		
			push()
			translate(Paperpos.x, Paperpos.y);
			rotate(this.body.angle)
			imageMode(CENTER)
			image(this.image,0,0,this.r,this.r)

			 pop()
	}

}