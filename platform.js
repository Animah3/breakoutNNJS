function platform(){
	this.x = 250;
	this.y = 780;
	this.wid = 100;
	this.hei = 20;
	this.brain = new NeuralNetwork(5,10,1);


	this.show = function(){
		let c = color('#820AFA');
		fill(c);
		rect(this.x,this.y,this.wid,this.hei);
	}

	this.update = function(i){
		this.x += i; 
		if( this.x >= 500){
			this.x = 500;
		}
		if( this.x <= 0){
			this.x = 0;
		}
	}
	

}