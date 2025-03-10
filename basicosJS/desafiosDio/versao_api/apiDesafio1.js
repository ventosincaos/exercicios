// CONSTANTS API
const express = require("express");
const app = express();
const port = 3001;

// CONSTANTS 
const allExperience = require('../json/exp.json')
const MESSAGE_NAME_PREFIX = "O héroi de nome";
const MESSAGE_LEVEL_SUFFIX = "está no nível de";

// START
app.use(express.json());

// HERO EXP SEARCH FUNCTION 
function gameExperience(heroName, heroExperience) {
  for (let categories of allExperience.levelExperience) {
    if (heroExperience >= categories.minExperience && heroExperience <= categories.maxExperience){
      return `${MESSAGE_NAME_PREFIX} ${heroName} ${MESSAGE_LEVEL_SUFFIX} ${categories.name}`;
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
