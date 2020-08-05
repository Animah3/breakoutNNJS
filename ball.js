function ball(){
	this.x = 300;
	this.y = 400;
	this.size= 10;
	this.xVel = 3;
	this.yVel = 4;


	this.show = function(){
		fill(color('#FB50FB'));
		rect(this.x,this.y,this.size,this.size);
	}
	this.update = function(){
		this.x += this.xVel;
		this.y += this.yVel;
		if( this.x <= 0 || this.x >= 590 ){
			this.xVel *= -1;
		}
		if( this.y <= 0 ){
			this.yVel *= -1;
		}
		if( this.yVel > 10){
			this.yVel = 10;
		}
		if( this.yVel < -10){
			this.yVel = -10;
		}
	}
	this.collidePlat = function(plat){
		if( ((this.y - plat.y) < 20 && (this.y - plat.y) > -10) && ( (this.x - plat.x) < 100 && (this.x - plat.x) > 0) && this.yVel > 0){
			this.yVel *= -1.08;
			this.xVel = (this.x - plat.x - 20) * .1;
		}
	}

	this.collideBrick = function(bri){
		if( ((this.y - bri.y) < 30 && (this.y - bri.y) > -10)  && ( (this.x - bri.x) < 60 && (this.x - bri.x) > 0) ){
			this.yVel*=-1;
			return true;
		}
	}
	this.reset = function(){
		this.y = 400;
		this.yVel = this.yVel*.75;
		if( this.yVel < 0){
			this.yVel *= -1;
		}
	}	
}	 	