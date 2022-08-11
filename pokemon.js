class Pokemon {
  constructor(name, type = "normal", hitPoints, attackDamage, move = "tackle") {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }

  isEffectiveAgainst(pokemon) {
    // if (this.type === "normal") {
    //   return false;
    // } else if (this.type === "grass" && pokemon.type === "water") {
    //   return true;
    // } else if (this.type === "grass" && pokemon.type === "fire") {
    //   return false;
    // } else {
    //   return true;
    // }

    const guide = {};

    switch (this.type) {
      case "normal":
        guide["water"] = false;
        guide["fire"] = false;
        guide["grass"] = false;
        break;
      case "grass":
        guide["water"] = true;
        guide["fire"] = false;
        guide["grass"] = false;
        break;
      case "water":
        guide["fire"] = true;
        guide["grass"] = false;
        guide["water"] = false;
        break;
      case "fire":
        guide["grass"] = true;
        guide["water"] = false;
        guide["fire"] = fire;
        break;
    }
    return guide[pokemon.type];
  }

  isWeakTo(pokemon) {
    if (this.type === "normal") {
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

class FirePokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, "fire", hitPoints, attackDamage, move);
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, "water", hitPoints, attackDamage, move);
  }
}

class GrassPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, "grass", hitPoints, attackDamage, move);
  }
}

module.exports = { Pokemon, FirePokemon, WaterPokemon, GrassPokemon };
