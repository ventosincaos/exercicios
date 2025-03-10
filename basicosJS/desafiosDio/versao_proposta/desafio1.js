// CONSTANTS
// em primeira versão, foi utilizado array, mas foi alterado para .json
const allExperience = require('../data/exp.json');
const MESSAGE_NAME_PREFIX = "O héroi de nome";
const MESSAGE_LEVEL_SUFFIX = "está no nível de";

// START
// em primeira versão, foi feito em switch case, mas foi alterado para for 
function gameExperience(heroName, heroExperience) {
  for (let categories of allExperience.levelExperience) {
    if (heroExperience >= categories.minExperience && heroExperience <= categories.maxExperience){
      return `${MESSAGE_NAME_PREFIX} ${heroName} ${MESSAGE_LEVEL_SUFFIX} ${categories.name}`;
    }
  }
} 

let finalExperience = gameExperience("helena", 5001);
console.log(finalExperience)
//END