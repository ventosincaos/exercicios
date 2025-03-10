// CONSTANTS
// antes status era um array e depois, foi alterado para uma matriz, agora está em .json
const allStatus = require('../data/status.json');
const MESSAGE_NAME_PREFIX = "O héroi de nome";
const MESSAGE_LEVEL_SUFFIX = "está no nível de";

// START
// em primeira versão, foram utilizados comparadores no for, mas foi alterado para for ... of
function gameStatus(victory, defeat, heroName) {
  wins = victory - defeat;
  for(let status of allStatus.levelStatus) {
    if (wins >= status.minWins && wins <= status.maxWins){
      return `${MESSAGE_NAME_PREFIX} ${heroName} tem de saldo de ${victory} vitórias ${MESSAGE_LEVEL_SUFFIX} **${status.name}**`;
    }
  }
}

let finalStatus = gameStatus(19, 5, "Helena");
console.log(finalStatus)
//END
