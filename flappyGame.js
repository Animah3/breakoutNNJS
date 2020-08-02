let birds = []; 
let save = [];
var pipes = [];
const TOTAL = 300;
let counter=0;
let slider;
let speed;
let highScore=0;
let allTimeHighScore;
let highScoreSpan;

function keyPressed() {
  let bird = birds[0];
  let json = bird.brain.serialize();
  console.log(json);
}

function setup() {
  createCanvas(640, 480);
  slider=select('#slider');
  speed=select('#speed');
  highScoreSpan= select('#hs');
  allTimeHighScore=select('#ahs');

  for(let i =0; i<TOTAL;i++){
    birds[i] = new Bird();
  }
  
}

function draw() {
  let cycles = slider.value();
  speed.html(cycles);

  for(let n = 0; n<cycles; n++){ 
  if (counter % 75 == 0) {
    pipes.push(new Pipe());
  }
  counter++


  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();

     for(let j = birds.length-1; j>=0; j--){
      if(pipes[i].hits(birds[j])){
        save.push(birds.splice(j,1)[0]);
      } 
    }



    /*if (pipes[i].hits(bird)) {
      console.log('HIT');
    } */

    for( let i = birds.length -1; i>= 0; i--){
      if(birds[i].offScreen()){
        save.push(birds.splice(i,1)[0]);
      }
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
  for( let bird of birds){
  bird.think(pipes);  
  bird.update();
  }

  if( birds.length == 0){
    nextGeneration(); 
    pipes = [];
    counter=0;
  }
  let tempHighScore=0;
  for(let i =0; i<birds.length; i++){
    let s = birds[i].score;
    if(s>tempHighScore){
      tempHighScore=s;
    }
  }
  if(tempHighScore>highScore){
    highScore= tempHighScore;
  }
  highScoreSpan.html(tempHighScore);
  allTimeHighScore.html(highScore)


  background(0);
  for( let bird of birds){
    bird.show();
  }
  for( let pipe of pipes){
    pipe.show()
  }
}




  }


/* function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
} */