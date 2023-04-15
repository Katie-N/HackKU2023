let plantOptions = document.getElementById("addPlant");
plantOptions.addEventListener("input", addPlants);

let plantList = document.getElementById("plantList");
let selectedPlants = [];

function addPlants(e) {
  // If the selected plant is an option
  let selectedPlant = plants.find(plant => plant.name == plantOptions.value);
  if (selectedPlant)) {
    console.log("It's in the list");
    let newPlant = document.createElement("div");

    let plantImage = document.createElement("img");
    plantImage.src = selectedPlant.img.src;
    plantImage.alt = selectedPlant.img.alt;

    let plantQuantity = document.createElement("input");
    plantQuantity.value = "1";
    plantQuantity.type = "number";
    plantQuantity.classList = "input__field";
    plantQuantity.addEventListener("input", updatePlantQuantity(plantQuantity));

    let deletePlant = document.createElement("img");
    deletePlant.src = "./Art Assets/Icons/icons8-trash.svg";
    deletePlant.alt = "delete " + selectedPlant.name;
    deletePlant.classList.add("trash");

    newPlant.appendChild(plantImage);
    newPlant.appendChild(plantQuantity);
    newPlant.appendChild(deletePlant);
    plantList.appendChild(newPlant);


    let plantForArray = {
      ...selectedPlant,
      quantity: 1,
    }

    selectedPlants.push(plantForArray);
  } else {
    console.log("it's not an option so don't do anything.")
  }
}

function updatePlantQuantity(plant) {
  console.log(plant.value);
}
