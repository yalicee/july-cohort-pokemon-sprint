class Pokemon {
  constructor(name, type = 'normal', hitPoints, attackDamage, move = 'tackle') {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }

  isEffectiveAgainst(pokemon) {
    const guide = {};

    switch (this.type) {
      case 'normal':
        guide['water'] = false;
        guide['fire'] = false;
        guide['grass'] = false;
        break;
      case 'grass':
        guide['water'] = true;
        guide['fire'] = false;
        guide['grass'] = false;
        break;
      case 'water':
        guide['fire'] = true;
        guide['grass'] = false;
        guide['water'] = false;
        break;
      case 'fire':
        guide['grass'] = true;
        guide['water'] = false;
        guide['fire'] = false;
        break;
    }
    return guide[pokemon.type];
  }

  isWeakTo(pokemon) {
    const guide = {};

    switch (this.type) {
      case 'normal':
        guide['water'] = false;
        guide['fire'] = false;
        guide['grass'] = false;
        break;
      case 'grass':
        guide['water'] = false;
        guide['fire'] = true;
        guide['grass'] = false;
        break;
      case 'water':
        guide['fire'] = false;
        guide['grass'] = true;
        guide['water'] = false;
        break;
      case 'fire':
        guide['grass'] = false;
        guide['water'] = true;
        guide['fire'] = false;
        break;
    }

    return guide[pokemon.type];
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
    super(name, 'fire', hitPoints, attackDamage, move);
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, 'water', hitPoints, attackDamage, move);
  }
}

class GrassPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, 'grass', hitPoints, attackDamage, move);
  }
}

class Charmander extends FirePokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage, 'fiery dance');
  }
}

class Squirtle extends WaterPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage, 'water gun');
  }
}

module.exports = {
  Pokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  Charmander,
  Squirtle,
};
