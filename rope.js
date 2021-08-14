class rope{
	constructor(x1,y1,x2,y2,t,col,sx,sy,e,st,con)
	{   
		push()
        stroke(col);
		strokeWeight(t);
		line(x1,y1,x2,y2);
		pop()

	 //create rope constraint here
	   con = Matter.Constraint.create({
       pointA:{sx,sy},
	   bodyB:e,
	   length:100,
	   stiffness:st
	  })

    }



    //create display() here 

}
