let arrayOfSquares = []

function createPlot(numSquares) {
   let gardenPlot = document.getElementById("gardenPlot")
   removeAllChildNodes(gardenPlot);
   arrayOfSquares = [];
   for (i = 0; i < numSquares; i++) {
     square = document.createElement("div");
     document.getElementById("gardenPlot").appendChild(square);
     arrayOfSquares.push(square)
   }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
}

let widthInput = document.getElementById("width");
let lengthInput = document.getElementById("length")

let width = 1;
let length = 1;

createPlot(width*length);

lengthInput.addEventListener("input", updateLength);
widthInput.addEventListener("input", updateWidth);

function updateLength() {
  console.log("Updating Length");
  let rows = "";
  length = lengthInput.value;
  for (let i = 0; i < length; i++) {
    rows += " 1fr"
}
document.getElementById("gardenPlot").style.gridTemplateRows = rows;
  createPlot(width * length);
}

function updateWidth() {
  console.log("Updating Width");
  let columns = "";
  width = widthInput.value;
  for (let i = 0; i < width; i++) {
    columns += " 1fr"
  }
  document.getElementById("gardenPlot").style.gridTemplateColumns = columns;
    createPlot(width * length);
}
