const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 125,
  "size2": 90,
  "offsetx": 75,
  "offsety": 225,
  "offset2x": 75,
  "offset2y": 75,
  
  "line1top": 20,
  "line1bot": 270,

  "line2top": -20,
  "line2bot": 200,

  "line3top": -20,
  "line3bot": 200,

  "line4top": 20,
  "line4bot": 270,
}

const letterB = {
  "size": 90,
  "size2": 90,
  "offsetx": 90,
  "offsety": 60,
  "offset2x": 90,
  "offset2y": 185,

  "line1top": -280,
  "line1bot": 250,

  "line2top": -280,
  "line2bot": 250,

  "line3top": -280,
  "line3bot": 250,

  "line4top": -250,
  "line4bot": 200,
}

const letterC = {
  "size": 200,
  "size2": 200,
  "offsetx": 125,
  "offsety": 125,
  "offset2x": 125,
  "offset2y": 125,

  "line1top": -500,
  "line1bot": 200,

  "line2top": -390,
  "line2bot": 240,

  "line3top": -350,
  "line3bot": 270,

  "line4top": -350,
  "line4bot": 270,
}

const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#fcdf03";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  // stroke(strokeColor);
  // strokeWeight(4);
  //noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(6, 36, 54);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 350, center_y - 125, letterA);
  drawLetter(center_x - 75, center_y - 125, letterB);
  drawLetter(center_x + 200, center_y - 125, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let size3 = letterData["size2"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3y = posy + letterData["offset2y"];
  let pos3x = posx + letterData["offset2x"];
  
  let line1top = posx + letterData["line1top"]
  let line1bot = posy + letterData["line1bot"]

  let line2top = posx + letterData["line2top"]
  let line2bot = posy + letterData["line2bot"]

  let line3top = posx + letterData["line3top"]
  let line3bot = posy + letterData["line3bot"]

  let line4top = posx + letterData["line4top"]
  let line4bot = posy + letterData["line4bot"]

  

  // draw two circles
  noStroke();
  fill(28, 97, 138);
  rect(posx, posy, 150, 250, 20);
  
  stroke(90, 156, 196, 130);
  strokeWeight(20);
  line(posx+20, line1top, posx+20, line1bot);
  line(posx+55, line2top, posx+55, line2bot);
  line(posx+95, line3top, posx+95, line3bot);
  line(posx+130, line4top, posx+130, line4bot);

  noStroke();
  fill(6, 36, 54, 120);
  ellipse(pos2x, pos2y, size2, size2);
  ellipse(pos3x, pos3y, size3, size3);
  //ellipse(205, 200, 90);
  //ellipse(495, 315, 90);
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
