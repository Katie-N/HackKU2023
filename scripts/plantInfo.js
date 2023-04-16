const artPath = "./Art Assets/Cropped";
let plants = [

	{
	name: "tomato",
	hardinessZone: [5, 8],
	friends: ["basil", "marigold", "onion", "carrot"],
	enemies: ["cabbage", "broccoli", "potato", "cucumber", "strawberry"],
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
	seasonToPlant: [1,1],
	seasonToHarvest: [2,3],
	img: {
      src: artPath + "/cucumber.png",
      alt: "a pixelized cucumber",
    },
},
{
	name: "potato",
	hardinessZone: [3, 10],
	friends: ["basil", "cabbage", "marigold", "onion", "broccoli"],
	enemies: ["cucumber", "tomato", "carrot"],
	seasonToPlant: [1,1],
	seasonToHarvest: [2,3],
	img: {
      src: artPath + "/potato.png",
      alt: "a pixelized potato",
    },
},
{
	name: "marigold",
	hardinessZone: [2, 11],
	friends: ["potato", "cucumber", "basil", "tomato", "onion", "strawberry", "broccoli"],
	enemies: ["cabbage", "pea"],
	seasonToPlant: [1,1],
	seasonToHarvest: [2,2],
	img: {
      src: artPath + "/marigold.png",
      alt: "a pixelized marigold",
    },
},
{
	name: "cabbage",
	hardinessZone: [1,10],
	friends: ["potato", "basil", "onion", "broccoli", "beet"],
	enemies: ["marigold", "cucumber", "tomato", "strawberry"],
	seasonToPlant: [1,1],
	seasonToHarvest: [2,3],
	img: {
      src: artPath + "/cabbage.png",
      alt: "a pixelized cabbage",
    },
},
{
	name: "onion",
	hardinessZone: [1,11],
	friends: ["broccoli", "cabbage", "carrot", "tomato", "potato", "marigold", ],
	enemies: ["pea"],
	seasonToPlant: [1,1],
	seasonToHarvest: [2,3],
	img: {
      src: artPath + "/onion.png",
      alt: "a pixelized onion",
    },
},
{
	name: "strawberry",
	hardinessZone: [5,8],
	friends: ["marigold", "potato",],
	enemies: ["cabbage", "tomato",],
	seasonToPlant: [1,1],
	seasonToHarvest: [2,2],
	img: {
      src: artPath + "/strawberry.png",
      alt: "a pixelized strawberry",
    },
},
{
	name: "carrot", 
	hardinessZone: [3,10],
	friends: ["onion", "cucumber", "tomato", "pea"],
	enemies: ["beet", "potato"],
	seasonToPlant: [1,1],
	seasonToHarvest: [2,2],
	img: {
      src: artPath + "/carrot.png",
      alt: "a pixelized carrot",
    },
},
{
	name: "beet", 
	hardinessZone: [2,11],
	friends: ["broccoli", "cucumber", "cabbage"],
	enemies: ["pea", "carrot"],
	seasonToPlant: [1,1],
	seasonToHarvest: [2,2],
	img: {
      src: artPath + "/beet.png",
      alt: "a pixelized beet",
    },
},
{
	name: "pea", 
	hardinessZone: [1,12],
	friends: ["potato", "cucumber", "carrot", "cabbage"],
	enemies: ["broccoli", "marigold", "onion", "beet"],
	seasonToPlant: [1,1],
	seasonToHarvest: [2,3],
	img: {
      src: artPath + "/pea.png",
      alt: "a pixelized pea",
    },
},
{
	name: "broccoli", 
	hardinessZone: [2,11],
	friends: ["cabbage", "onion", "beet", "marigold", "potato", "cucumber"],
	enemies: ["tomato", "pea", "strawberry"],
	seasonToPlant: [1,1],
	seasonToHarvest: [2,2],
	img: {
      src: artPath + "/broccoli.png",
      alt: "a pixelized broccoli",
    },
},
];