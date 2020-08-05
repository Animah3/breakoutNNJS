var bricks = [];
let counter =0;
let plat;
let bouncyBall;
let lives = 3;
let score = 0;
let scoreCount= 0;
let brickCounter = 0;
let allTimeHighScore;
let highScoreSpan;
let brickSpan;
let livesSpan;
let highScore =0;
let scoreBall =0;
function keyPressed(){
  if( keyCode === LEFT_ARROW ){
    plat.update(-5);
  }
  if( keyCode === RIGHT_ARROW){
    plat.update(5);
  }
}

function setup(){
  lives = 3;
	createCanvas (600,800);
  highScoreSpan= select('#hs');
  allTimeHighScore=select('#ahs');
  livesSpan=select('#ls');
  brickSpan=select('#bs');
	counter=0;
  frameRate(240);
  plat= new platform();
  bouncyBall = new ball();
	for(let j=0; j<3;j++){
  	 for(let i=0; i<10; i++){
  	 	bricks.push( new brick(i,j));
  	 	counter++;
  }
 }
}



function draw() {
  scoreCount++;
  score += (1000)/( Math.sqrt(scoreCount,2) + 10000);


  let colDetection = false;
  background(0);
  for( let b of bricks ){
  	b.show();
  }
  if( keyIsDown(LEFT_ARROW  )){
    plat.update(-5);
  }
  if( keyIsDown(RIGHT_ARROW)){
    plat.update(5);
  }

  if(bouncyBall.y < 400){
   for( let i = bricks.length -1; i>=0; i-- ){
    if(bouncyBall.collideBrick(bricks[i])){
      bricks.splice(i,1);
      brickCounter++;
    }
    }
  }

  if(bouncyBall.y > 700){
    bouncyBall.collidePlat(plat);
  }

  if(bouncyBall.y >= 800){
    lives--;
    bouncyBall.reset();
  }


  if( lives <= 0){
    if( score > highScore){
      highScore = score;
    }
    lives = 3;
    score = 0;
    scoreCount = 0;
    bricks = [];
    for(let j=0; j<3;j++){
     for(let i=0; i<10; i++){
      bricks.push( new brick(i,j));
      counter++;
      brickCounter=0;
     }
   }
  }



  highScoreSpan.html(score);
  allTimeHighScore.html(highScore);
  brickSpan.html(brickCounter);
  livesSpan.html(lives);

  bouncyBall.update();
  plat.show();
  bouncyBall.show();



}