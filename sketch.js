var mic;
function setup(){
  createCanvas(640, 480);
  mic = new p5.AudioIn()
  mic.start();
}
function draw(){
  background(255);
  micLevel = mic.getLevel();
  fill(0);
  text("hello " + micLevel, width/2, height/2);
//  print(micLevel);
  fill(micLevel*2550, 0, 0);
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 20, 20);
}