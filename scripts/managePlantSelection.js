let plantOptions = document.querySelector('input[name="plantSelection"]');
plantOptions.addEventListener("input", addPlants);

let plantSelection = document.getElementById("plantSelection");
plants.forEach(plant => {
  let newPlantOption = document.createElement("option");
  newPlantOption.text = plant.name;
  plantSelection.appendChild(newPlantOption);
});
let selectedPlants = [];
let plantList = document.getElementById("plantList");

function addPlants(e) {
  // If the selected plant is an option
  let selectedPlant = plants.find(plant => plant.name == plantOptions.value);
  console.log(selectedPlant);
  if (selectedPlant) {
    console.log("It's in the list");
    let newPlant = document.createElement("div");
    newPlant.id = selectedPlant.name + "Container";

    let plantImage = document.createElement("img");
    plantImage.src = selectedPlant.img.src;
    plantImage.alt = selectedPlant.img.alt;

    let plantQuantity = document.createElement("input");
    plantQuantity.value = "1";
    plantQuantity.type = "number";
    plantQuantity.classList = "input__field";
    plantQuantity.addEventListener("input", updatePlantQuantity.bind(this, selectedPlant, plantQuantity));

    let deletePlant = document.createElement("img");
    deletePlant.src = "./Art Assets/Icons/icons8-trash.svg";
    deletePlant.alt = "delete " + selectedPlant.name;
    deletePlant.classList.add("trash");
    deletePlant.addEventListener("click", deletePlantFromPlan.bind(this, newPlant))

    newPlant.appendChild(plantImage);
    newPlant.appendChild(plantQuantity);
    newPlant.appendChild(deletePlant);
    plantList.appendChild(newPlant);


    let plantForArray = {
      ...selectedPlant,
    }
    plantForArray.quantity = plantForArray.quantity + 1 || 1;

    selectedPlants.push(plantForArray);
  } else {
    console.log("it's not an option so don't do anything.")
  }
}

function updatePlantQuantity(plant, newQuantity) {
  if (newQuantity.value <= 0) {
    deletePlantFromPlan(plant);
  } else {
    selectedPlants.find(p => p.name == plant.name).quantity = newQuantity.value;
  }
}

function deletePlantFromPlan(plant) {
  let plantToDelete;
  // If the passed plant is a DOM reference. This is used for the trash can.
  if ((plant instanceof Element || plant instanceof HTMLDocument) && plantList.contains(plant)) {
    plantToDelete = selectedPlants.find(p => p.name + "Container" == plant.id);
  } else { // If the passed plant is not a DOM reference. This is used when the updated quantity is <= 0
    plantToDelete = selectedPlants.find(p => p.name == plant.name);
    plant = document.getElementById(plant.name + "Container");
  }

  selectedPlants.splice(selectedPlants.indexOf(plantToDelete), 1);
  plantList.removeChild(plant);
}