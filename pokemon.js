class Pokemon {
  constructor(name, type = "normal", hitPoints, attackDamage, move = "tackle") {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }
}

module.exports = { Pokemon };
