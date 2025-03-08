// CONSTANTS
const level = require('../json/exp.json');
const MESSAGE_NAME_PREFIX = "O héroi de nome";
const MESSAGE_LEVEL_SUFFIX = "está no nível de";

// START
// HERO EXP SEARCH FUNCTION 
function gameExperience(heroName, heroExperience) {
  for (let categories of level.levelExperience) {
    if (heroExperience >= categories.minExperience && heroExperience <= categories.maxExperience){
      return `${MESSAGE_NAME_PREFIX} ${heroName} ${MESSAGE_LEVEL_SUFFIX} ${categories.name}`;
    }
  }
} //END HERO EXP SEARCH FUNCTION

let finalExperience = gameExperience("helena", 5001);
console.log(finalExperience)
//END