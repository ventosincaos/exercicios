// váriaveis
let nomeHeroi = "Júlio Cesar";
let experienciaHeroi = 10002;
let nivelHeroi;

// constantes
const mensagemNome = "O héroi de nome";
const mensagemNivel = "está no nível de";

// estrutura decisão para XP do héroi
switch (true) {
  case experienciaHeroi >= 1001 && experienciaHeroi <= 2000:
    nivelHeroi = "bronze";
    break;
  case experienciaHeroi >= 2001 && experienciaHeroi <= 5000:
    nivelHeroi = "prata";
    break;
  case experienciaHeroi >= 5001 && experienciaHeroi <= 7000:
    nivelHeroi = "ouro";
    break;
  case experienciaHeroi >= 7001 && experienciaHeroi <= 8000:
    nivelHeroi = "platina";
    break;
  case experienciaHeroi >= 8001 && experienciaHeroi <= 9000:
    nivelHeroi = "ascendente";
    break;
  case experienciaHeroi >= 9001 && experienciaHeroi <= 10000:
    nivelHeroi = "imortal";
    break;
  case experienciaHeroi >= 10001:
    nivelHeroi = "radiante";
    break;
  default:
    nivelHeroi = "ferro";
}

console.log(`${mensagemNome} ${nomeHeroi} ${mensagemNivel} ${nivelHeroi}`);
