const artPath = "./Art Assets/Cropped";
let plants = [
  {
  	name: "tomato",
  	hardinessZone: [5, 8],
  	friends: ["basil", "marigold", "onion"],
  	enemies: ["cabbage", "broccoli", "potato", "cucumber"],
  	seasonToPlant: [1,1],
  	seasonToHarvest: [2,3],
    img: {
      src: artPath + "/tomato.png",
      alt: "a pixelized tomato",
    },
  },
  {
  	name: "basil",
  	hardinessZone: [5, 11],
  	friends: ["tomato", "marigold", "potato", "cabbage"],
  	enemies: ["cucumber"],
  	seasonToPlant: [1,1],
  	seasonToHarvest:[1,3],
    img: {
      src: artPath + "/basil.png",
      alt: "a pixelized basil",
    },
  },
  {
  name: "cucumber",
  	hardinessZone: [4, 12],
  	friends: ["beet", "carrot", "marigold"],
  	enemies: ["potato", "basil", "tomato", "cabbage"],
  	monthToPlant: [1,1],
  	monthToHarvest: [2,3],
    img: {
      src: artPath + "/cucumber.png",
      alt: "a pixelized cucumber",
    },
  },
  {
  	name: "potato",
  	hardinessZone: [3, 10],
  	friends: ["basil", "cabbage", "marigold", "onion"],
  	enemies: ["cucumber", "tomato"],
  	monthToPlant: [1,1],
  	monthToHarvest: [2,3],
    img: {
      src: artPath + "/potato.png",
      alt: "a pixelized potato",
    },
  },
  {
  	name: "marigold",
  	hardinessZone: [2, 11],
  	friends: ["potato", "cucumber", "basil", "tomato", "onion"],
  	enemies: ["cabbage", "legume"],
  	monthToPlant: [1,1],
  	monthToHarvest: [2,2],
  },
  {
  name: "cabbage",
  	hardinessZone: [1,10],
  	friends: ["potato", "basil", "onion"],
  	enemies: ["marigold", "cucumber", "tomato",],
  	monthToPlant: [1,1],
  	monthToHarvest: [2,3],
  },
  {
  	name: "onion",
  	hardinessZone: [1,11],
  	friends: ["broccoli", "cabbage", "carrot", "tomato", "potato", "marigold", ],
  	enemies: ["legume"],
  	monthToPlant: [1,1],
  	monthToHarvest: [2,3],
    img: {
      src: artPath + "/onion.png",
      alt: "a pixelized onion",
    },
  }
]
