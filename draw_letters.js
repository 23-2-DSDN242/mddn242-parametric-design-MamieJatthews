/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for second circle
  let posx = 50;
  let posy = 100;

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
  fill(15, 68, 99);
  rect(20, 50, 60, 100, 5);

  print("The variable is: " + line1top);

  stroke(90, 156, 196, 130);
  strokeWeight(8);
  line(27, line1top-5, 27, line1bot+5);
  line(42, line2top-5, 42, line2bot+5);
  line(57, line3top-5, 57, line3bot+5);
  line(72, line4top-5, 72, line4bot+5);

  noStroke();
  fill(7, 36, 54, 120);
  ellipse(pos2x, pos2y, size2, size2);
  ellipse(pos3x, pos3y, size3, size3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offset2x"] = map(percent, 0, 100, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 100, oldObj["offset2y"], newObj["offset2y"]);
  new_letter["line1top"] = map(percent, 0, 100, oldObj["line1top"], newObj["line1top"]);
  new_letter["line1bot"] = map(percent, 0, 100, oldObj["line1bot"], newObj["line1bot"]);
  new_letter["line2top"] = map(percent, 0, 100, oldObj["line2top"], newObj["line2top"]);
  new_letter["line2bot"] = map(percent, 0, 100, oldObj["line2bot"], newObj["line2bot"]);
  new_letter["line3top"] = map(percent, 0, 100, oldObj["line3top"], newObj["line3top"]);
  new_letter["line3bot"] = map(percent, 0, 100, oldObj["line3bot"], newObj["line3bot"]);
  new_letter["line4top"] = map(percent, 0, 100, oldObj["line4top"], newObj["line4top"]);
  new_letter["line4bot"] = map(percent, 0, 100, oldObj["line4bot"], newObj["line4bot"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
