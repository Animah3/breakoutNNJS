
function nextGeneration(){

	calculateFitness();



	for(let i=0; i<TOTAL;i++){
		birds[i] = pickOne();
	}
	save= [];
}

 function pickOne(){
	var index = 0;
	var r = random(1);

	while( r>0) {
		r = r - save[index].fitness;
		index++
	}
	index--;

	let bird = save[index];
	let child = new Bird(bird.brain);
	child.mutate(0.1);
	return child;
}



/*function pickOne(){

	let bird = random(save);
	let child = new Bird(bird.brain);
	child.mutate(0.1);
	return child;
} */

function calculateFitness(){
	let sum = 0;
	for(let bird of save){
		sum+= bird.score;
	}
	for (let bird of save){
		bird.fitness = bird.score / sum;
	}
}