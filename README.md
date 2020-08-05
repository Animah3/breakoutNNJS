# breakoutNNJS
This self-project is dedicated to two aspects:
1. Coding the game "Breakout" from the original Atari, from scratch using Javascript. To aid with the process I'm using a library called p5.js, good library that allows for easy drawing of shapes and such.
2. Applying a neural network to the game, to train an AI to perfectly play the game. At first I was looking into the TOY neural network library to help but after some research I realize that applying a genetic algorithm and using generations wouldn't work. The processing power to simulate over 50 games of breakout at once would be rediculous. Thus I will be attempting to use Tensorflow.js and/or ml5.js to attempt Q learning.
