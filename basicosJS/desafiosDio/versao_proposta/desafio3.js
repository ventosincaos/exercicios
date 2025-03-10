const heroesData = require("../json/hero.json");
const attackData = require("../json/attacks.json");

// START
class Hero {
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

const heroes = heroesData.Heroes.map(heroData => new Hero(heroData.name, heroData.age, heroData.type));
heroes.forEach(hero => hero.messageAttack());
//END