function brick(i,j){
	this.hei = 30;
	this.wid = 60;
	this.x = i*60 ;
	this.y = j*30 + 60;





	this.show = function(ball){
		
		let c;
		if( this.y == 60){
			c = color('#FA0A0A');
			}
		else if( this.y == 90){
			c= color('#0AFA82');
		}
		else if( this.y == 120){
			c =color('#0A0AFA');
		}
		fill(c);
		rect(this.x,this.y,this.wid,this.hei);
	}
}
