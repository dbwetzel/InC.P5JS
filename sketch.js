var mySound, myPhrase, myPart;
var pattern = [0,0,64,0,65,0,67,0];
var msg = 'click to play';

var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001
var decayTime = 0.01;
var susPercent = 1.;
var releaseTime = 0.1;

var env, triOsc;

function setup() {
  noStroke();
  fill(255);
  textAlign(CENTER);
  masterVolume(0.1);

  myPhrase = new p5.Phrase('bbox', makeSound, pattern);
  myPart = new p5.Part();
  myPart.addPhrase(myPhrase);
  myPart.setBPM(132);
  
  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  triOsc = new p5.Oscillator('triangle');
  triOsc.amp(env);
  triOsc.start();
  triOsc.freq(220);

}

function draw() {
  background(0);
  text(msg, width/2, height/2);
}

function makeSound(time, note) {
	// create env and osc
	// "note" sets pitch
	// "time" triggers sound
  var freq = midiToFreq(note);
  triOsc.freq(freq);	
  env.play(triOsc, time);

}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    myPart.start();
    msg = 'playing pattern';
  }
}

