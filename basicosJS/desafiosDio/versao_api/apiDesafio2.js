// CONSTANTS API
const express = require("express");
const app = express();
const port = 3002;

// CONSTANTS
const allStatus = require('../json/status.json');
const MESSAGE_NAME_PREFIX = "O héroi de nome";
const MESSAGE_LEVEL_SUFFIX = "está no nível de";

// START
app.use(express.json());

// HERO LEVEL SEARCH FUNCTION
function gameStatus(victory, defeat, heroName) {
  wins = victory - defeat;
  for(let status of allStatus.levelStatus) {
    if (wins >= status.minWins && wins <= status.maxWins){
      return `${MESSAGE_NAME_PREFIX} ${heroName} tem de saldo de ${victory} vitórias ${MESSAGE_LEVEL_SUFFIX} **${status.name}**`;
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
