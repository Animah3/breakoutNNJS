let nn;
//This is the training data. Standard XOR gate.
let training_data = [{
	inputs: [0,0],
	outputs:[0]

},
{
	inputs: [1,0],
	outputs:[1]

},
{
	inputs: [0,1],
	outputs:[1]

},
{
	inputs: [1,1],
	outputs:[0]

}];
//setup the canvas and initialize the NN
function setup() {
  createCanvas(400, 400);
  nn = new NeuralNetwork(2, 2, 1);
}
//fill in the boxes and train the NN
function draw() {
  background(0);

  //loop to train this dude 1000 times
  for(let i=0; i<1000;i++){
  	let data = random(training_data);
  	nn.train(data.inputs, data.outputs);
	}

	let resolution = 10;
	let cols = width / resolution;
	let rows = height / resolution;
	for (let i =  0; i<cols;i++){
		for(let j = 0;j < rows; j++){
			let x1 = i/cols;
			let x2 = j/rows;
			let inputs = [x1,x2];
			let y = nn.predict(inputs);
			fill(y*255);
			rect(i*resolution,j*resolution,resolution,resolution);
		}
	}
}	