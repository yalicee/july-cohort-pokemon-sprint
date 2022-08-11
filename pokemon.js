class Pokemon {
  constructor(name, type = 'normal', hitPoints, attackDamage, move = 'tackle') {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }

  isEffectiveAgainst(pokemon) {
    if (this.type === 'normal') {
      return false;
    } else {
      return true;
    }
  }

  isWeakTo(pokemon) {
    if (this.type === 'normal') {
      return false;
    } else {
      return true;
    }
  }

  takeDamage(damageAmount) {
    return (this.hitPoints -= damageAmount);
  }

  useMove() {
    console.log(`${this.name} used ${this.move}`);
    return this.attackDamage;
  }

  hasFainted() {
    return this.hitPoints <= 0 ? true : false;
  }
}

module.exports = { Pokemon };
