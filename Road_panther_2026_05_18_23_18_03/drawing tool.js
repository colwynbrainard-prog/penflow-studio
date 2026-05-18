let tool = "brush";
let currentColor = "#2f3e46";
let brushSize = 20;

let colors = [
  "#2f3e46",
  "#52796f",
  "#84a98c",
  "#f2cc8f",
  "#8d6e63",
  "#e07a5f",
  "#3d5a80",
  "#6d597a",
  "#ffffff"
];

function setup() {
  createCanvas(650, 450);
  background(245);
}

function draw() {

  noStroke();
  fill(235);
  rect(0, 0, width, 70);

  fill(20);
  textSize(14);

  text(
    "1 Brush | 2 Line | 3 Dots | 4 Stamp | 5 Eraser | C Clear",
    15,
    22
  );

  text(
    "Q Gray  W Green  E Sage  R Tan  T Brown  Y Coral  U Blue  I Purple  O White",
    15,
    45
  );

  text("Size: - / +", 15, 64);

  fill(currentColor);
  circle(620, 35, brushSize);

  if (mouseIsPressed && mouseY > 70) {

    if (tool === "brush") {
      drawBrush();
    }

    if (tool === "line") {
      drawLineTool();
    }

    if (tool === "dots") {
      drawDots();
    }

    if (tool === "stamp") {
      drawStamp();
    }

    if (tool === "eraser") {
      eraseMark();
    }
  }
}

function keyPressed() {

  if (key === "1") tool = "brush";
  if (key === "2") tool = "line";
  if (key === "3") tool = "dots";
  if (key === "4") tool = "stamp";
  if (key === "5") tool = "eraser";

  if (key === "c" || key === "C") {
    background(245);
  }

  if (key === "-") {
    brushSize = max(5, brushSize - 5);
  }

  if (key === "=" || key === "+") {
    brushSize = min(80, brushSize + 5);
  }

  if (key === "q" || key === "Q") currentColor = colors[0];
  if (key === "w" || key === "W") currentColor = colors[1];
  if (key === "e" || key === "E") currentColor = colors[2];
  if (key === "r" || key === "R") currentColor = colors[3];
  if (key === "t" || key === "T") currentColor = colors[4];
  if (key === "y" || key === "Y") currentColor = colors[5];
  if (key === "u" || key === "U") currentColor = colors[6];
  if (key === "i" || key === "I") currentColor = colors[7];
  if (key === "o" || key === "O") currentColor = colors[8];
}

function drawBrush() {
  stroke(currentColor);
  strokeWeight(brushSize);
  strokeCap(ROUND);

  line(pmouseX, pmouseY, mouseX, mouseY);
}

function drawLineTool() {
  stroke(currentColor);
  strokeWeight(brushSize / 4);

  line(
    pmouseX,
    pmouseY,
    mouseX,
    mouseY
  );
}

function drawDots() {
  noStroke();
  fill(currentColor);

  for (let i = 0; i < 5; i++) {

    circle(
      mouseX + random(-brushSize, brushSize),
      mouseY + random(-brushSize, brushSize),
      random(4, brushSize / 2)
    );
  }
}

function drawStamp() {

  push();

  translate(mouseX, mouseY);

  rotate(random(TWO_PI));

  stroke(currentColor);
  strokeWeight(brushSize / 5);

  noFill();

  let type = floor(random(5));

  if (type === 0) {
    rect(
      -brushSize / 2,
      -brushSize / 2,
      brushSize,
      brushSize
    );
  }

  if (type === 1) {
    triangle(
      0,
      -brushSize,
      -brushSize,
      brushSize,
      brushSize,
      brushSize
    );
  }

  if (type === 2) {
    circle(0, 0, brushSize);
  }

  if (type === 3) {

    line(-brushSize, 0, brushSize, 0);

    line(0, -brushSize, 0, brushSize);
  }

  if (type === 4) {
    arc(
      0,
      0,
      brushSize * 2,
      brushSize * 2,
      PI,
      TWO_PI
    );
  }

  pop();
}

function eraseMark() {
  noStroke();
  fill(245);

  circle(mouseX, mouseY, brushSize);
}