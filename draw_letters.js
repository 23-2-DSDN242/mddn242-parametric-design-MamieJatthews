
function drawLetter(letterData) {
  // determine parameters
  let posx = 50;
  let posy = 100;
  //cirlces
  let size2 = letterData["size"];
  let size3 = letterData["size2"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3y = posy + letterData["offset2y"];
  let pos3x = posx + letterData["offset2x"];
  //lines
  let line1top = posx + letterData["line1top"]
  let line1bot = posy + letterData["line1bot"]
  let line2top = posx + letterData["line2top"]
  let line2bot = posy + letterData["line2bot"]
  let line3top = posx + letterData["line3top"]
  let line3bot = posy + letterData["line3bot"]
  let line4top = posx + letterData["line4top"]
  let line4bot = posy + letterData["line4bot"]


  //Draw Shapes 
  //Stationary rectangle 
  noStroke();
  fill(15, 68, 99);
  rect(20, 50, 60, 100, 5);

  //4 lines which can be moved vertically but stay horizontally in the same place 
  stroke(90, 156, 196, 130);
  strokeWeight(8);
  line(27, line1top-5, 27, line1bot+5);
  line(42, line2top-5, 42, line2bot+5);
  line(57, line3top-5, 57, line3bot+5);
  line(72, line4top-5, 72, line4bot+5);

  //2 Circles which can be shifted horizontally and vertically and adjust size 
  noStroke();
  fill(7, 36, 54, 120);
  ellipse(pos2x, pos2y, size2, size2);
  ellipse(pos3x, pos3y, size3, size3);
}

//create interpolation which shifts the letter gradually; the circles inerpolate first then the lines. 
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {}; 
  if(percent <= 40) {//first 40% of the animation interpolates the cirlces 
  //Circle parameters shift from oldObj to NewObj
  new_letter["size"]    = map(percent, 0, 50, oldObj["size"], newObj["size"]);
  new_letter["size2"]    = map(percent, 0, 50, oldObj["size2"], newObj["size2"]);
  new_letter["offsetx"] = map(percent, 0, 50, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 50, oldObj["offsety"], newObj["offsety"]);
  new_letter["offset2x"] = map(percent, 0, 50, oldObj["offset2x"], newObj["offset2x"]);
  new_letter["offset2y"] = map(percent, 0, 50, oldObj["offset2y"], newObj["offset2y"]);
  //line parameters stay at oldObj
  new_letter["line1top"] = oldObj["line1top"]
  new_letter["line1bot"] = oldObj["line1bot"]
  new_letter["line2top"] = oldObj["line2top"]
  new_letter["line2bot"] = oldObj["line2bot"]
  new_letter["line3top"] = oldObj["line3top"]
  new_letter["line3bot"] = oldObj["line3bot"]
  new_letter["line4top"] = oldObj["line4top"]
  new_letter["line4bot"] = oldObj["line4bot"]
  }
  if(percent >= 60) {//Final 60% of the animation interpolates the line paramters
  //Circle Parameters stay at their newObj
  new_letter["size"]    = newObj["size"];
  new_letter["size2"]    = newObj["size2"];
  new_letter["offsetx"] = newObj["offsetx"];
  new_letter["offsety"] = newObj["offsety"];
  new_letter["offset2x"] = newObj["offset2x"];
  new_letter["offset2y"] = newObj["offset2y"];
  //line parameters interpolate from oldObj to NewObj
  new_letter["line1top"] = map(percent, 50, 100, oldObj["line1top"], newObj["line1top"]);
  new_letter["line1bot"] = map(percent, 50, 100, oldObj["line1bot"], newObj["line1bot"]);
  new_letter["line2top"] = map(percent, 50, 100, oldObj["line2top"], newObj["line2top"]);
  new_letter["line2bot"] = map(percent, 50, 100, oldObj["line2bot"], newObj["line2bot"]);
  new_letter["line3top"] = map(percent, 50, 100, oldObj["line3top"], newObj["line3top"]);
  new_letter["line3bot"] = map(percent, 50, 100, oldObj["line3bot"], newObj["line3bot"]);
  new_letter["line4top"] = map(percent, 50, 100, oldObj["line4top"], newObj["line4top"]);
  new_letter["line4bot"] = map(percent, 50, 100, oldObj["line4bot"], newObj["line4bot"]);
  }

  else if(percent > 40 && percent < 60) {//Create a pause in the middle 40% - 60%
  //line parameters stay at oldObj
  new_letter["line1top"] = oldObj["line1top"]
  new_letter["line1bot"] = oldObj["line1bot"]
  new_letter["line2top"] = oldObj["line2top"]
  new_letter["line2bot"] = oldObj["line2bot"]
  new_letter["line3top"] = oldObj["line3top"]
  new_letter["line3bot"] = oldObj["line3bot"]
  new_letter["line4top"] = oldObj["line4top"]
  new_letter["line4bot"] = oldObj["line4bot"]
  //Circle parameters stay at newObj  
  new_letter["size"]    = newObj["size"];
  new_letter["size2"]    = newObj["size2"];
  new_letter["offsetx"] = newObj["offsetx"];
  new_letter["offsety"] = newObj["offsety"];
  new_letter["offset2x"] = newObj["offset2x"];
  new_letter["offset2y"] = newObj["offset2y"];
  }
  return new_letter;
}

var swapWords = [
  "*SQUINT*",
  "TYPEFACE",
  "NEATNESS",
  "ELEGANCE",
  "CLEANEST",
  "SMOOTHLY",
  "READABLE",
  "MODESTLY",
  "POLISHED",
  "GRACIOUS",
  "SUBTLEST",
  "UNEMBELL",
  "TIDINESS",







  
]
