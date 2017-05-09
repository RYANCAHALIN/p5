/*
- change the range of the freq slider to 0-1
- change the mapping of the slider
Math.pow(sliderValue, 4) * 20000 +20
*/


var playMode = 'sustain';
var sample1;
var sample2;
var sample3;
var sample4;
var slider;
var reverb;
var reverbTime=0;
var decayRate=0;
var filter1;
var freq=21000;
var res=10;
var filter2;
var freq2=22050;
var res2=90;
var revtime;
var revdecay;
var delay1;
var delayTime=0.1;
var feedback=0.1;
var mic;
var recorder;
var state=0;
var mvol;
var img;
var distortion1;
var soundFile;



function preload(){



  sample1 = loadSound("Kick 2.wav");
  sample2 = loadSound("Snare 1.wav");
  sample3 = loadSound("HiHatHipHop.wav");
  sample4 = loadSound("A minor s1.wav");
  sample5 = loadSound("G Major s1.wav");
  sample6 = loadSound("F Major s1.wav");
  sample7 = loadSound("D minor s1.wav");
  sample8 = loadSound("E minor s1.wav");
 sample9 = loadSound("Scratch5.wav");
 sample10=loadSound("PlateKnock4.wav");
 sample11=loadSound("CymbalTapeTail.wav");
 //sample10 = loadSound("Try one of these?.wav");
  sample1.disconnect();
  sample2.disconnect();
  sample3.disconnect();
  sample4.disconnect();
  sample5.disconnect();
  sample6.disconnect();
  sample7.disconnect();
  sample8.disconnect();
  sample9.disconnect();
  sample10.disconnect();
  sample11.disconnect();
//  sample10.disconnect();

}


function setup() {

  createCanvas(1000,800);
//
 img=loadImage("Log.png");


  text("Enjoy");
  //analyzer= new p5.Amplitude();
  //analyzer.setInput(sample1);

  //ellipse(56,46,55,55);

 //loadImage("samplepad.png .png");


  slider=createSlider(10,21000,0,0);
  slider.position(20,height*0.2);
  slider2=createSlider(0,50,0,0);
  slider2.position(20,height*0.2+30);
  slider3=createSlider(20,22050,0,0); //change from 0-1
  slider3.position(20,height*0.2+60);
  slider4=createSlider(0,20,0,0);
  slider4.position(20,height*0.2+90);
  slider5=createSlider(0.1,0.99,0,0);
  slider5.position(20,height*0.2+120);
  slider6=createSlider(0.1,0.99,0.1,0);
  slider6.position(20,height*0.2+150);
  slider7=createSlider(0.1,0.99,0.5,0);
  slider7.position(700,height*0.2);
  slider7.style('width', '80px');


  //img =loadImage(samplepad.png .png);

  soundFormats('wav', 'ogg');
  sample1 = loadSound("Kick 2.wav");
  sample2 = loadSound("Snare 1.wav");
  sample3 = loadSound("HiHatHipHop.wav");
  sample4 = loadSound("A minor s1.wav");
  sample5 = loadSound("G Major s1.wav");
  sample6 = loadSound("F Major s1.wav");
  sample7 = loadSound("D minor s1.wav");
  sample8 = loadSound("E minor s1.wav");
  sample9 = loadSound("Scratch5.wav");
  sample10=loadSound("PlateKnock4.wav");
   sample11=loadSound("CymbalTapeTail.wav");

//  sample10 = loadSound("Try one of these?.wav");
  //loads samples, creates canvas

  filter1= new p5.Filter('lowpass');


  //var res=10;


  filter1.freq(freq);
  filter1.res(res);
  //filter1.amp(2);

   sample1.disconnect();
   sample2.disconnect();
   sample3.disconnect();
   sample4.disconnect();
   sample5.disconnect();
   sample6.disconnect();
   sample7.disconnect();
   sample8.disconnect();
   sample9.disconnect();
   sample10.disconnect();
   sample11.disconnect();



  sample1.connect(filter1);
  sample2.connect(filter1);
  sample3.connect(filter1);
  sample4.connect(filter1);
  sample5.connect(filter1);
  sample6.connect(filter1);
  sample7.connect(filter1);
  sample8.connect(filter1);
  sample9.connect(filter1);
  sample10.connect(filter1);
  sample11.connect(filter1);

  filter2 = new p5.Filter("bandpass");
  filter2.freq(freq2);
  filter2.res(res2);

  filter1.connect(filter2);

  reverb1 = new p5.Reverb();


 delay1 = new p5.Delay();

 delay1.setType('pingPong');

 delay1.delayTime(delayTime);
 delay1.feedback(feedback);


 filter2.connect(delay1);

 delay1.connect(reverb1);
 masterVolume();

 //mvol.volume();


 //distortion1 = new p5.Distortion();

 //distortion1.getAmount();
 //distortion1.amount(amount);
 //distortion1.oversample(oversample);
 //distortion1.connect(reverb1);

 analyzer= new p5.Amplitude();
 analyzer.setInput(sample1);
 analyzer2= new p5.Amplitude();
 analyzer2.setInput(sample2);
 analyzer3= new p5.Amplitude();
 analyzer3.setInput(sample3);

 fft = new p5.FFT();

 // create an audio in
//mic = new p5.AudioIn();

// users must manually enable their browser microphone for recording to work properly!
//mic.start();

// create a sound recorder
recorder = new p5.SoundRecorder();

// connect the mic to the recorder
recorder.setInput(this.output);

// create an empty sound file that we will use to playback the recording
soundFile = new p5.SoundFile();




//mic = new AudioIn();
//mic.start();
//recorder=new p5 SoundRecorder();
//recorder.setInput(mic);
//soundFile=new p5 SoundFile;
// masterVolume();
//var mic= new p5.AudioIn();
//mic.start();


 //reverb1.connect(masterVolume);


//img =loadImage(samplepad.png .png);


  // sonnects soundFile to reverb with a
  // reverbTime of 6 seconds, decayRate of 0.2%
  //reverb.process(sample1,sample2,sample3, reverbTime, decayRate);
//  reverb.process(sample3, reverbTime, decayRate);


  //reverb.amp(2); // turn it up!
}

function draw() {
  background(51);
  image(img,400,height/12,img.width/2,img.height/2);

  textSize(25);
  fill(150, 200, 153);
  text( "Use the Keyboard to trigger samples and sliders to manipulate FX, Have fun!",35,30);
    textStyle(NORMAL);
  fill(0, 102, 153);
  textFont("Helvetica");
  text("Master Volume",655,140);
    textStyle(BOLD);
    textSize(15);
    text("LPF frequency",160,170);
    text("LPF resonance",160,200);
    text("BPF frequency",160,230);
    text("BPF resonance",160,260);
    text("Delay Time",160,290);
    text("Delay Feedback",160,320);
    text("Use the R key to start,stop recording.Press R again to download soundfile and press P to playback",115,50);




  var rms = analyzer.getLevel();
  var rms2= analyzer2.getLevel();
  var rms3= analyzer3.getLevel();

  ellipse(width/2, height/2, 10+rms2*200, 10+rms2*200);

  fill(150,50,50);


  ellipse(width/2-100, height/2, 10+rms*300, 10+rms*300);

  fill(150,100,100);
  ellipse(width/2+100, height/2, 10+rms3*300, 10+rms3*300);

  fill(200,250,50);

  var spectrum = fft.analyze();
  noStroke();
  fill(205,75,150); // spectrum is green
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }

  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,0,0); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();




  //ellipse(500,400,vol *,100);



    //loadImage("samplepad.png .png");


 var str = 'Play using the keyboard! Mouseclick to toggle play mode.';
 str += ' Current Play Mode: ' + playMode+'.';
 text(str, 10, height/0.5);
 var val=slider.value();
 filter1.freq(val);
 var val2=slider2.value();
 filter1.res(val2);
 var val3=slider3.value();
 filter2.freq(val3);
 var val4=slider4.value();
 filter2.res(val4);
 var val5=slider5.value();
 delay1.delayTime(val5);
 var val6=slider6.value();
 delay1.feedback(val6);
 var val7=slider7.value();
 masterVolume(val7);



//var vol =mic.getLevel();
//console.log(vol);

  //var val=slider.value();
  //filter1Freq=(0,val);
//  reverb.process(sample1,sample2,sample3,val, decayRate);
}


function keyPressed() {
  console.log(keyCode);

      if (keyCode === 65){
      sample1.play(); }
      else if (keyCode=== 83){
      sample2.play();}
      else if (keyCode=== 68){
      sample3.play();}
      else if (keyCode===70){
      sample4.play();}
      else if (keyCode===71){
      sample5.play();}
      else if (keyCode===72){
      sample6.play();}
      else if (keyCode===74){
      sample7.play();}
      else if (keyCode===75){
      sample8.play();}
      else if (keyCode===88){
      sample9.play();}
      else if (keyCode===67){
      sample10.play();}
      else if (keyCode===81){
      sample11.play();}
      else if (keyCode===80){
        soundFile.play();}
      else if (keyCode===82){  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
        if (state === 0) {

          // Tell recorder to record to a p5.SoundFile which we will use for playback
        recorder.record(soundFile);


          text('Recording now! Click to stop.', 20, 20);
          state++;
        }

        else if (state === 1) {
          recorder.stop(); // stop recorder, and send the result to soundFile

          ;
          text('Recording stopped. Click to play & save', 20, 20);
          state++;
        }

        else if (state === 2) {
          soundFile.play(); // play the result!
          saveSound(soundFile, 'Your Beat.wav'); // save file
          state++;




        }


}

// function keyPressed() {
//   // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
//   if (state === 0 && mic.enabled) {
//
//     // Tell recorder to record to a p5.SoundFile which we will use for playback
//   recorder.record(soundFile);
//
//
//     text('Recording now! Click to stop.', 20, 20);
//     state++;
//   }
//
//   else if (state === 1) {
//     recorder.stop(); // stop recorder, and send the result to soundFile
//
//     ;
//     text('Recording stopped. Click to play & save', 20, 20);
//     state++;
//   }
//
//   else if (state === 2) {
//     soundFile.play(); // play the result!
//     saveSound(soundFile, 'mySound.wav'); // save file
//     state++;
//   }
// }

//matches samples with key values via console.log keyCode()

function mouseClicked() {

    togglePlayMode();
}

function togglePlayMode(){
  if (playMode == 'sustain'){
    playMode = 'restart';
  }
  else {
    playMode = 'sustain';
  }
  delay1.playMode(playMode);

}
}






//reverb1.set(reverbTime,decayRate);
//reverb1.reverbTime(reverbTime);
//reverb1.decayRate(decayRate);
//reverb.amp(1);
//reverb1.disconnect();
//  reverb1.disconnect();

//reverb.set(revtime,revdecay);
//reverb1.disconnect(filter1);
//reverb1.connect(filter1);
//sample1.connect(reverb1);
// sample2.connect(reverb);
// sample3.connect(reverb);
// sample4.connect(reverb);
// sample5.connect(reverb);
// sample6.connect(reverb);
// sample7.connect(reverb);
// sample8.connect(reverb);
//
//Do next
//
//create slider to mainpulate reverb
//create a layout for sampler
