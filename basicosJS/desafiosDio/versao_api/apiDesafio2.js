// CONSTANTS API
const express = require("express");
const app = express();
const port = 3002;
// START
app.use(express.json());

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
} // END FUNCTION

// APP POST
app.post("/status", (req, res) => {
  const { victory, defeat, heroName } = req.body;

  if (victory === undefined || defeat === undefined) {
    return res.status(400).json({ error: "erro: vitórias e derrotas não contabilizadas" });
  }

  if (heroName === undefined) {
    return res.status(400).json({ error: "erro: nome do herói não cadastrado" });
  }

  const finalStatus = gameStatus(victory, defeat, heroName);
  res.json({ message: finalStatus });
}); //END APP POST

// APP PORT
app.listen(port, () => {
  console.log(`server initialize: http://localhost:${port}/status`);
}); // END APP PORT
