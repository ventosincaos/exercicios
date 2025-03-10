class hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.attack = this.attackTypes(type);
  }

  attackTypes(type) {
    const attackMethod = {
      guerreiro: "espada",
      mago: "magia",
      monge: "artes marciais",
      ninja: "shuriken",
    };
    return attackMethod[type];
  }

  messageAttack() {
    console.log(`O ${this.type} ${this.name} atacou usando ${this.attack}`);
  }
}

let arthur = new hero("Arthur", 20, "guerreiro");
arthur.messageAttack();
