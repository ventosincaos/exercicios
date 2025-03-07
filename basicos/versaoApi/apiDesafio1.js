const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

// váriaveis
let nivel = [
  "ferro",
  "bronze",
  "prata",
  "ouro",
  "platina",
  "ascendente",
  "imortal",
  "radiante",
];
let nivelHeroi;

// constantes
const MENSAGEM_NOME = "O héroi de nome";
const MENSAGEM_NIVEL = "está no nível de";

// início
// estrutura decisão para XP do héroi
function experiencia(nomeHeroi, experienciaHeroi) {
  switch (true) {
    case experienciaHeroi >= 10001:
      nivelHeroi = nivel[7];
      break;
    case experienciaHeroi >= 9001:
      nivelHeroi = nivel[6];
      break;
    case experienciaHeroi >= 8001:
      nivelHeroi = nivel[5];
      break;
    case experienciaHeroi >= 7001:
      nivelHeroi = nivel[4];
      break;
    case experienciaHeroi >= 5001:
      nivelHeroi = nivel[3];
      break;
    case experienciaHeroi >= 2001:
      nivelHeroi = nivel[2];
      break;
    case experienciaHeroi >= 1001:
      nivelHeroi = nivel[1];
      break;
    default:
      nivelHeroi = nivel[0];
  }

  // saida
  return `${MENSAGEM_NOME} ${nomeHeroi} ${MENSAGEM_NIVEL} ${nivelHeroi}`;
}

app.post("/experience", (req, res) => {
  const { nomeHeroi, experienciaHeroi } = req.body;

  if (nomeHeroi === undefined || experienciaHeroi === undefined) {
    return res.status(400).json({ error: "erro" });
  }

  const resultadoFinal = experiencia(nomeHeroi, experienciaHeroi);
  res.json({ message: resultadoFinal });
});

app.listen(port, () => {
  console.log(`server initialize: http://localhost:${port}/experience`);
});
