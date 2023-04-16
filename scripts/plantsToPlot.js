// make array/matrix of the squares
// Loop through the plants selected and increment the square you're accessing
// append the plant image to the square

// Right now, the plants aren't sorted. Eventually we want them to be though.
let sortedPlantList = selectedPlants;

function numberOfPlants(plantListToTake) {
  let size = 0;
  plantListToTake.forEach(plant => {
    size += parseInt(plant.quantity);
  });
  console.log(size);
  return size;
}

function createAndUpdatePlot() {
  console.log("Create And Update");
  createPlot(length * width);
  lengthInput.value = length;
  widthInput.value = width;
  updateLength();
  updateWidth();
}

// If there are more plants selected than garden space, add a row or column until there's enough space.
// Note that the variable length and the property arrayOfSquares.length ARE DIFFERENT. The variable describes the number of rows. The property describes the number of squares (so width * length)
function resizePlot() {
  while (width * length < numberOfPlants(sortedPlantList)) {
    if (width <= length) {
      width++
    } else {
      length++
    }
  }

  console.log(width * length / numberOfPlants(sortedPlantList));
  let remainder = width * length % numberOfPlants(sortedPlantList);
  while(width * length / numberOfPlants(sortedPlantList) >= 2 || remainder >= length) {
    if (width <= length) {
      length--
    } else {
      width--
    }
    remainder = width * length % numberOfPlants(sortedPlantList);
    console.log("New width and length", width + " " + length);
  }
  createAndUpdatePlot();
}

function plotThePlants() {
  console.log("Plotting time");
  resizePlot();

  // plant 1. with 2 items:
    // index = 0
    // index = 1
  // plant 2. has 1 item
    // index = 2
  let totalPlantsAdded = 0;
  sortedPlantList.forEach(plant => {
    for (j = 0; j < plant.quantity; j++) {
      squareImg = document.createElement("img");
      squareImg.src = plant.img.src;
      squareImg.alt = plant.img.alt;
      squareImg.classList.add(plant.name, "squareImg");
      console.log(arrayOfSquares);
      arrayOfSquares[totalPlantsAdded].appendChild(squareImg);
      totalPlantsAdded++;
    }
  });
}
