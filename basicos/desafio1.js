// váriaveis
let nomeHeroi = "Júlio Cesar";
let experienciaHeroi = 10001;
let nivel = ["ferro", "bronze", "prata", "ouro", "platina", "ascendente", "imortal", "radiante"]
let nivelHeroi;

// constantes
const MENSAGEM_NOME = "O héroi de nome";
const MENSAGEM_NIVEL = "está no nível de";

// início
// estrutura decisão para XP do héroi
switch (true) {
  case experienciaHeroi >= 1001 && experienciaHeroi <= 2000:
    nivelHeroi = nivel[1];
    break;
  case experienciaHeroi >= 2001 && experienciaHeroi <= 5000:
    nivelHeroi = nivel[2];
    break;
  case experienciaHeroi >= 5001 && experienciaHeroi <= 7000:
    nivelHeroi = nivel[3];
    break;
  case experienciaHeroi >= 7001 && experienciaHeroi <= 8000:
    nivelHeroi = nivel[4];
    break;
  case experienciaHeroi >= 8001 && experienciaHeroi <= 9000:
    nivelHeroi = nivel[5];
    break;
  case experienciaHeroi >= 9001 && experienciaHeroi <= 10000:
    nivelHeroi = nivel[6];
    break;
  case experienciaHeroi >= 10001:
    nivelHeroi = nivel[7];
    break;
  default:
    nivelHeroi = nivel[0];
}

// saida
console.log(`${MENSAGEM_NOME} ${nomeHeroi} ${MENSAGEM_NIVEL} ${nivelHeroi}`);
