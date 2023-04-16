let plantOptions = document.querySelector('input[name="plantSelection"]');
plantOptions.addEventListener("input", addPlants);
plantOptions.addEventListener("input", showRelationships);
// deleting a plant should trigger showRelationships. It will work fine because it gets last plant in list not passed info.

let relationshipsDiv;
function showRelationships() {
  if (relationshipsDiv) {
    removeAllChildNodes(relationshipsDiv);
  }

  let listAbove = document.getElementById("plantList")
  relationshipsDiv = document.createElement("div")

  relationshipsDiv.id = "relationshipsDiv";

  let friendDiv = document.createElement("div");
  let enemyDiv = document.createElement("div");

  // Friends
    let friendLabel = document.createElement("h2");
    friendLabel.textContent = "Friends";
    friendDiv.appendChild(friendLabel);
  selectedPlants.slice(-1)[0].friends.forEach((friendName, i) => {
    let newFriend = document.createElement("img");
    let friendReference = plants.find(p => p.name == friendName);
    newFriend.src = friendReference.img.src;
    newFriend.alt = friendReference.img.alt;
    // TODO: newFriend addeventlistner for click. Or onclick=...

    friendDiv.appendChild(newFriend);
  });

  // Enemies
    let enemyLabel = document.createElement("h2");
    enemyLabel.textContent = "Enemies";
    enemyDiv.appendChild(enemyLabel);
  selectedPlants.slice(-1)[0].enemies.forEach((enemyName, i) => {
    let newEnemy = document.createElement("img");
    let enemyReference = plants.find(p => p.name == enemyName);
    newEnemy.src = enemyReference.img.src;
    newEnemy.alt = enemyReference.img.alt;
    // newEnemy addeventlistner for click. Or onclick=...

    enemyDiv.appendChild(newEnemy);
  });

  // After doing everything to the div
  relationshipsDiv.appendChild(friendDiv);
  relationshipsDiv.appendChild(enemyDiv);
  insertAfter(relationshipsDiv, listAbove);
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

let hardinessInput = document.getElementById("hardiness");
let hardinessLevel;

hardinessInput.addEventListener("input", renderOptions);
hardinessInput.addEventListener("input", deleteIncompatibleHardiness);

renderOptions();
function renderOptions() {
  hardinessLevel = hardinessInput.value;
  removeAllChildNodes(plantSelection);
  plants.forEach(plant => {
    let newPlantOption = document.createElement("option");
    if(plant.hardinessZone[0] > hardinessLevel || plant.hardinessZone[1] < hardinessLevel) {
      // If the hardiness level of the user is outside the range of the plant, then disable the plant option
      newPlantOption.disabled = true;
    }
    newPlantOption.text = plant.name;
    plantSelection.appendChild(newPlantOption);
  });
}

function deleteIncompatibleHardiness() {
  selectedPlants.forEach((plant, i) => {
    if(plant.hardinessZone[0] > hardinessLevel || plant.hardinessZone[1] < hardinessLevel) {
      // If the new hardiness level is outside the range of a selected plant, then remove the plant from the selection.
      deletePlantFromPlan(plant);
    }
  });
}

let selectedPlants = [];
let plantList = document.getElementById("plantList");

function addPlants(e) {
  // If the selected plant is an option
  let selectedPlant = plants.find(plant => plant.name == plantOptions.value);
  if (selectedPlant) {
    // Create and DOM elements
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
    deletePlant.addEventListener("click", deletePlantFromPlan.bind(this, newPlant));
    deletePlant.addEventListener("click", showRelationships);

    newPlant.appendChild(plantImage);
    newPlant.appendChild(plantQuantity);
    newPlant.appendChild(deletePlant);
    plantList.appendChild(newPlant);


    let plantForArray = {
      ...selectedPlant,
    }
    plantForArray.quantity = plantForArray.quantity + 1 || 1;

    selectedPlants.push(plantForArray);
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
