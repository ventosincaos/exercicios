const heroesData = require("../json/hero.json");
const attackData = require("../json/attacks.json");

class Hero {
  constructor(name, age, type, experience, victory, defeat) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.experience = experience;
    this.victory = victory;
    this.defeat = defeat;
    this.attack = attackData[this.type];
  }

  logInfo() {
    console.log("--------------");
    console.log(`Nome: ${this.name}`);
    console.log(`Idade: ${this.age}`);
    console.log(`Tipo: ${this.type}`);
    console.log(`Ataque: ${this.attack}`);
    console.log(`Experiência: ${this.experience}`);
    console.log(`Vitórias: ${this.victory}`);
    console.log(`Derrotas: ${this.defeat}`);
  }
}

const heroes = heroesData.Heroes.map(
  heroData =>
    new Hero(
      heroData.name,
      heroData.age,
      heroData.type,
      heroData.experience,
      heroData.victory,
      heroData.defeat
    )
);

// Exibe as informações de cada herói
heroes.forEach(hero => hero.logInfo());