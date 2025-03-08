// CONSTANTS
const categories = require('../json/exp.json');
const MESSAGE_NAME_PREFIX = "O héroi de nome";
const MESSAGE_LEVEL_SUFFIX = "está no nível de";

// START
// HERO EXP SEARCH FUNCTION 
function gameExperience(heroName, heroExperience) {
  for (let i = 0; i < categories.levelExperience.length; i++) {
    if (heroExperience >= categories.levelExperience[i].minExperience && heroExperience <= categories.levelExperience[i].maxExperience){
      return `${MESSAGE_NAME_PREFIX} ${heroName} ${MESSAGE_LEVEL_SUFFIX} ${categories.levelExperience[i].name}`;
    }
  }
}
//END HERO EXP SEARCH FUNCTION

let finalExperience = gameExperience("helena", 5001);
console.log(finalExperience)
//END