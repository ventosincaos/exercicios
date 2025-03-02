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
console.log(`${MENSAGEM_NOME} ${nomeHeroi} ${MENSAGEM_NIVEL} ${nivelHeroi}`);
