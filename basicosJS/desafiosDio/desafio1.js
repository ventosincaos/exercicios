// VARIABLES
let levelExperience = [
  ["ferro", -Infinity, 1000],
  ["bronze", 1001, 2000],
  ["prata", 2001, 5000],
  ["ouro", 5001, 7000],
  ["platina", 7001, 8000],
  ["ascendente", 8001, 9000],
  ["imortal", 9001, 10000],
  ["radiante", 10001, Math.pow(10, 9)],
];

// CONSTANTS
const MESSAGE_NAME_PREFIX = "O héroi de nome";
const MESSAGE_LEVEL_SUFFIX = "está no nível de";

// START
// HERO EXP SEARCH FUNCTION 
function gameExperience(heroName, heroExperience) {
  for (let i = 0; i < levelExperience.length; i++) {
    let nameLevelExperience = levelExperience[i][0];
    let minExperience = levelExperience[i][1];
    let maxExperience = levelExperience[i][2];

    if (heroExperience >= minExperience && heroExperience <= maxExperience){
      return `${MESSAGE_NAME_PREFIX} ${heroName} ${MESSAGE_LEVEL_SUFFIX} ${nameLevelExperience}`;
    }
  }
}
//END HERO EXP SEARCH FUNCTION

let finalExperience = gameExperience("helena", 1005);
console.log(finalExperience)
//END