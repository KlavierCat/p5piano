var KeyToMidi = {
    '81': 60, // q
    '50': 61, // 2
    '87': 62, // w
    '51': 63,
    '69': 64, // e
    '52': 65, // 4
    '82': 66, 

}

function setup() {
    createCanvas(1280, 400);
    osc = new p5.TriOsc(); 
    osc.start();
    osc.amp(0);
}

function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5,0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw() {
  fill(255);
  rect (10, 10, 30, 100);
  rect (40, 10, 30, 100);
  rect (70, 10, 30, 100);
  rect (100, 10, 30, 100);
  rect (130, 10, 30, 100);
  rect (160, 10, 30, 100);
  rect (190, 10, 30, 100);
  rect (220, 10, 30, 100);
  rect (250, 10, 30, 100);
  rect (280, 10, 30, 100);
  rect (310, 10, 30, 100);
  rect (340, 10, 30, 100);
  rect (370, 10, 30, 100);
  rect (400, 10, 30, 100);
  fill(0);
  rect (32,10,15,60);
  rect (62,10,15,60);
  rect (122,10,15,60);
  rect (152,10,15,60);
  rect (182,10,15,60);
  rect (242,10,15,60);
  rect (272,10,15,60);
  rect (332,10,15,60);
  rect (362,10,15,60);
  rect (392,10,15,60);

}

function keyPressed() {
    playNote(KeyToMidi[keyCode], 200);
}


// Fade it out when we release
function mouseReleased() {
  osc.fade(0,0.5);
}