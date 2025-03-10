const heroesData = require("../json/hero.json");
const attackData = require("../json/attacks.json");

class hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.attack = attackData[this.type];
  }

  messageAttack() {
    console.log(`O ${this.type} ${this.name} atacou usando ${this.attack}`);
  }
}

const heroes = heroesData.map(heroData => new hero(heroData.name, heroData.age, heroData.type));
heroes.forEach(hero => hero.messageAttack());
