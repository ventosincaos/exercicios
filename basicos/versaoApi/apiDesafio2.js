const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

var level = [
  ["ferro", -Infinity, 10],
  ["bronze", 11, 20],
  ["prata", 21, 50],
  ["ouro", 51, 80],
  ["diamante", 81, 90],
  ["lendário", 91, 100],
  ["imortal", 101, Math.pow(10, 9)],
];

// início
// função de decisão de status do héroi
function gameStatus(victory, defeat) {
  let result = victory - defeat;

  for (let i = 0; i < level.length; i++) {
    let levelName = level[i][0];
    let minLevel = level[i][1];
    let maxLevel = level[i][2];

    if (result >= minLevel && result <= maxLevel) {
      return `O herói tem de saldo de ${victory} vitórias está no nível **${levelName}**`;
    }
  }
}

//fim
app.post("/game", (req, res) => {
  const { victory, defeat } = req.body;

  if (victory === undefined || defeat === undefined) {
    return res.status(400).json({ error: "erro" });
  }

  const finalResult = gameStatus(victory, defeat);
  res.json({ message: finalResult });
});

app.listen(port, () => {
  console.log(`server initialize: http://localhost:${port}/game`);
});
