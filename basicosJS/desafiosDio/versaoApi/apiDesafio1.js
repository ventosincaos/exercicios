// CONSTANTS API
const express = require("express");
const app = express();
const port = 3001;

// START
app.use(express.json());

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

// CONSTANTS MESSAGE
const MESSAGE_NAME_PREFIX = "O héroi de nome";
const MESSAGE_LEVEL_SUFFIX = "está no nível de";

// HERO EXP SEARCH FUNCTION
function gameExperience(heroName, heroExperience) {
  for (let i = 0; i < levelExperience.length; i++) {
    let nameLevelExperience = levelExperience[i][0];
    let minExperience = levelExperience[i][1];
    let maxExperience = levelExperience[i][2];

    if (heroExperience >= minExperience && heroExperience <= maxExperience) {
      return `${MESSAGE_NAME_PREFIX} ${heroName} ${MESSAGE_LEVEL_SUFFIX} ${nameLevelExperience}`;
    }
  }
} //END HERO EXP SEARCH FUNCTION

// APP POST
app.post("/experience", (req, res) => {
  const { heroName, heroExperience } = req.body;

  if (heroName === undefined || heroExperience === undefined) {
    return res.status(400).json({ error: "erro" });
  }

  const finalExperience = gameExperience(heroName, heroExperience);
  res.json({ message: finalExperience });
});// END APP POST

// APP PORT
app.listen(port, () => {
  console.log(`server initialize: http://localhost:${port}/experience`);
});// END APP PORT
