// make array/matrix of the squares
// Loop through the plants selected and increment the square you're accessing
// append the plant image to the square

console.log("Width", width);
console.log("Length", length);

// Right now, the plants aren't sorted. Eventually we want them to be though.
let sortedPlantList = selectedPlants;

function plotThePlants() {
  console.log("Plotting time");
  // Remove all content from plot
  arrayOfSquares.forEach((square) => {
    removeAllChildNodes(square);
  });
  // If there are more plants selected than garden space, add a row until there's enough space.
  while (arrayOfSquares.length < sortedPlantList.length) {
    // Add a row
    length++;
    createPlot(length * width);
    lengthInput.value = length;
  }
  console.log(arrayOfSquares);

  // array
  sortedPlantList.forEach((plant, i) => {
    for (j = 0; j < plant.quantity; j++) {
      squareImg = document.createElement("img");
      squareImg.src = plant.img.src;
      squareImg.alt = plant.img.alt;
      squareImg.classList.add(plant.name, "squareImg");
      arrayOfSquares[i+j].appendChild(squareImg);
    }
  });
}
