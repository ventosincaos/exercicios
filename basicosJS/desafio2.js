var level = [
  ["ferro", -Infinity, 10],
  ["bronze", 11, 20],
  ["prata", 21, 50],
  ["ouro", 51, 80],
  ["diamante", 81, 90],
  ["lendário", 91, 100],
  ["imortal", 101, Math.pow(10, 9)],
];
let heroName = "Helena";

function gameStatus(victory, defeat) {
  let result = victory - defeat;

  for (let i = 0; i < level.length; i++) {
    let levelName = level[i][0];
    let minLevel = level[i][1];
    let maxLevel = level[i][2];

    if (result >= minLevel && result <= maxLevel) {
      return `O herói ${heroName} tem de saldo de ${victory} vitórias está no nível **${levelName}**`;
    }
  }
}

let finalResult = gameStatus(109, 5);
console.log(finalResult)
