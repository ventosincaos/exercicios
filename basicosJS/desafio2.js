//VARIABLES
var level = [
  ["ferro", -Infinity, 10],
  ["bronze", 11, 20],
  ["prata", 21, 50],
  ["ouro", 51, 80],
  ["diamante", 81, 90],
  ["lendário", 91, 100],
  ["imortal", 101, Math.pow(10, 9)],
];

// CONSTANTS
const MESSAGE_NAME_PREFIX = "O héroi de nome";
const MESSAGE_LEVEL_SUFFIX = "está no nível de";

// START
// HERO LEVEL SEARCH FUNCTION 
function gameStatus(victory, defeat, heroName) {
  let result = victory - defeat;


  for (let i = 0; i < level.length; i++) {
    let levelName = level[i][0];
    let minLevel = level[i][1];
    let maxLevel = level[i][2];

    if (result >= minLevel && result <= maxLevel) {
      return `${MESSAGE_NAME_PREFIX} ${heroName} tem de saldo de ${victory} vitórias ${MESSAGE_LEVEL_SUFFIX} **${levelName}**`;
    }
  }
} // END HERO LEVEL SEARCH FUNCTION 

let finalResult = gameStatus(19, 5, "Helena");
console.log(finalResult)
//END
