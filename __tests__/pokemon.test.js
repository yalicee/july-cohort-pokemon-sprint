const {
  Pokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  Charmander,
  Squirtle,
} = require('../pokemon');

describe('Pokemon - properties', () => {
  it('should be an instance of a Pokemon', () => {
    const scraggy = new Pokemon('Scraggy');
    expect(scraggy).toBeInstanceOf(Pokemon);
  });
  it('should have a name property', () => {
    const scraggy = new Pokemon('Scraggy');
    expect(scraggy).toHaveProperty('name');
    expect(scraggy.name).toBe('Scraggy');
  });
  it('should have a type property ', () => {
    const scraggy = new Pokemon('Scraggy');
    expect(scraggy).toHaveProperty('type');
    expect(scraggy.type).toBe('normal');
  });
  it('should update type property if passed as an argument', () => {
    const slowking = new Pokemon('Slow King', 'water');
    expect(slowking.type).toBe('water');
  });
  it('should have a hitPoints property ', () => {
    const scraggy = new Pokemon('Scraggy', 'normal', 100);
    expect(scraggy).toHaveProperty('hitPoints');
    expect(typeof scraggy.hitPoints).toBe('number');
    expect(scraggy.hitPoints).toBe(100);
  });
  it('should have a attackDamage property ', () => {
    const scraggy = new Pokemon('Scraggy', 'normal', 100, 12);
    expect(scraggy).toHaveProperty('attackDamage');
    expect(typeof scraggy.attackDamage).toBe('number');
    expect(scraggy.attackDamage).toBe(12);
  });
  it('should have a move property ', () => {
    const scraggy = new Pokemon('Scraggy', 100, 12);
    expect(scraggy).toHaveProperty('move');
    expect(typeof scraggy.move).toBe('string');
    expect(scraggy.move).toBe('tackle');
  });
});

describe('Pokemon - methods', () => {
  it('should have an isEffectiveAgainst method that returns false if pokemon type is normal', () => {
    const meowth = new Pokemon('Meowth', 'normal', 100, 12, 'scratch');
    const goldeen = new WaterPokemon('Goldeen', 100, 12, 'splash');
    expect(meowth.isEffectiveAgainst(goldeen)).toBe(false);
  });
  it('should have an isWeakTo method that returns false if type is normal', () => {
    const squirtle = new Pokemon('Squirtle', 'water', 100, 12, 'bubble gun');
    const persian = new Pokemon('Persian', 'normal', 60, 40, 'scratch');
    expect(persian.isWeakTo(squirtle)).toBe(false);
  });
  it('should have an isWeakTo method that returns true if type is not normal', () => {
    const squirtle = new Pokemon('Squirtle', 'water', 100, 12, 'bubble gun');
    const oddish = new Pokemon('Oddish', 'grass', 160, 40, 'spore');
    expect(squirtle.isWeakTo(oddish)).toBe(true);
  });
  it('should have a method called takeDamage which returns the hitPoints minus the number passed', () => {
    const lickitung = new Pokemon('Lickitung', 'normal', 500, 6, 'lick');
    expect(typeof lickitung.takeDamage).toBe('function');
    expect(typeof lickitung.takeDamage(50)).toBe('number');
    expect(lickitung.takeDamage(50)).toBe(400);
  });
  it("should contain a useMove method which returns the Pokemon's attack damage", () => {
    const lickitung = new Pokemon('Lickitung', 'normal', 500, 6, 'lick');
    expect(lickitung.useMove()).toBe(6);
  });
  // it('should console log that the move was used', () => {
  //   const lickitung = new Pokemon('Lickitung', 'normal', 500, 6, 'lick');

  //   const consoleSpy = jest.spyOn(console, 'log');

  //   console.log('hello');

  //   expect(consoleSpy).toHaveBeenCalledWith('hello');
  // });
  it('should have a hasFainted method which returns true if hp is zero', () => {
    const lickitung = new Pokemon('Lickitung', 'normal', 500, 6, 'lick');
    expect(lickitung).toHaveProperty('hasFainted');

    lickitung.takeDamage(500);

    expect(lickitung.hasFainted()).toBe(true);
  });
  it('should have a hasFainted method which returns false if hp is not zero', () => {
    const lickitung = new Pokemon('Lickitung', 'normal', 500, 6, 'lick');
    expect(lickitung).toHaveProperty('hasFainted');

    lickitung.takeDamage(20);

    expect(lickitung.hasFainted()).toBe(false);
  });
});

describe('Type classes', () => {
  describe('FirePokemon', () => {
    it('should be an instance of Pokemon and have a type property of fire', () => {
      const firePokemon = new FirePokemon('Charmander', 100, 12, 'ember');
      expect(firePokemon).toBeInstanceOf(Pokemon);
      expect(firePokemon.type).toBe('fire');
    });
    it('should return false from isEffectiveAgainst is other pokemon is water type', () => {
      const waterPokemon = new WaterPokemon('Goldeen', 100, 12, 'splash');
      const firePokemon = new FirePokemon('Charmander', 100, 12, 'ember');
      expect(firePokemon.isEffectiveAgainst(waterPokemon)).toBe(false);
    });
    it('should return true from isEffectiveAgainst if other pokemon is grass type', () => {
      const grassPokemon = new GrassPokemon('Chikorata', 100, 12, 'razer leaf');
      const firePokemon = new FirePokemon('Charmander', 100, 12, 'ember');
      expect(firePokemon.isEffectiveAgainst(grassPokemon)).toBe(true);
    });
    it('should return true from isWeakTo if other pokemon is water', () => {
      const waterPokemon = new WaterPokemon('Goldeen', 100, 12, 'splash');
      const firePokemon = new FirePokemon('Charmander', 100, 12, 'ember');
      expect(firePokemon.isWeakTo(waterPokemon)).toBe(true);
    });
    it('should return false from isWeakTo if other pokemon is grass', () => {
      const grassPokemon = new GrassPokemon('Oddish', 100, 12, 'spore');
      const firePokemon = new FirePokemon('Charmander', 100, 12, 'ember');
      expect(firePokemon.isWeakTo(grassPokemon)).toBe(false);
    });
  });
  describe('WaterPokemon', () => {
    it('should be an instance of Pokemon and have a type property of water', () => {
      const waterPokemon = new WaterPokemon('Goldeen', 100, 12, 'splash');
      expect(waterPokemon).toBeInstanceOf(Pokemon);
      expect(waterPokemon.type).toBe('water');
    });
    it('should return false from isEffectiveAgainst is other pokemon is grass type', () => {
      const grassPokemon = new GrassPokemon('Chikorata', 100, 12, 'razer leaf');
      const waterPokemon = new WaterPokemon('Goldeen', 100, 12, 'splash');
      expect(waterPokemon.isEffectiveAgainst(grassPokemon)).toBe(false);
    });
    it('should return true from isEffectiveAgainst if other pokemon is fire type', () => {
      const firePokemon = new FirePokemon('Charmander', 100, 12, 'ember');
      const waterPokemon = new WaterPokemon('Goldeen', 100, 12, 'splash');
      expect(waterPokemon.isEffectiveAgainst(firePokemon)).toBe(true);
    });
    it('should return true from isWeakTo if other pokemon is grass', () => {
      const waterPokemon = new WaterPokemon('Goldeen', 100, 12, 'splash');
      const grassPokemon = new GrassPokemon('Ivysaur', 100, 12, 'vine whip');
      expect(waterPokemon.isWeakTo(grassPokemon)).toBe(true);
    });
    it('should return false from isWeakTo if other pokemon is fire', () => {
      const waterPokemon = new WaterPokemon('Horsea', 100, 12, 'bubble');
      const firePokemon = new FirePokemon('Charmander', 100, 12, 'ember');
      expect(waterPokemon.isWeakTo(firePokemon)).toBe(false);
    });
  });
  describe('GrassPokemon', () => {
    it('should be an instance of Pokemon and have a type property of grass', () => {
      const grassPokemon = new GrassPokemon('Chikorata', 100, 12, 'razer leaf');
      expect(grassPokemon).toBeInstanceOf(Pokemon);
      expect(grassPokemon.type).toBe('grass');
    });
    it('should return false from isEffectiveAgainst is other pokemon is fire type', () => {
      const grassPokemon = new GrassPokemon('Chikorata', 100, 12, 'razer leaf');
      const firePokemon = new FirePokemon('Charmander', 100, 12, 'ember');
      expect(grassPokemon.isEffectiveAgainst(firePokemon)).toBe(false);
    });
    it('should return true from isEffectiveAgainst if other pokemon is water type', () => {
      const grassPokemon = new GrassPokemon('Chikorata', 100, 12, 'razer leaf');
      const waterPokemon = new WaterPokemon('Goldeen', 100, 12, 'splash');
      expect(grassPokemon.isEffectiveAgainst(waterPokemon)).toBe(true);
    });
    it('should return true from isWeakTo if other pokemon is fire', () => {
      const firePokemon = new FirePokemon('Magmar', 100, 12, 'ember');
      const grassPokemon = new GrassPokemon('Ivysaur', 100, 12, 'vine whip');
      expect(grassPokemon.isWeakTo(firePokemon)).toBe(true);
    });
    it('should return false from isWeakTo if other pokemon is water', () => {
      const waterPokemon = new WaterPokemon('Horsea', 100, 12, 'bubble');
      const grassPokemon = new GrassPokemon('Treecko', 100, 12, 'razor wind');
      expect(grassPokemon.isWeakTo(waterPokemon)).toBe(false);
    });
  });
  describe('AllTypes', () => {
    it('should return false from isEffectiveAgainst if both pokemon are the same type', () => {
      const goldeen = new WaterPokemon('Goldeen', 100, 12, 'splash');
      const blastoise = new WaterPokemon('Blastoise', 600, 40, 'water cannon');

      expect(goldeen.isEffectiveAgainst(blastoise)).toBe(false);
      expect(blastoise.isEffectiveAgainst(goldeen)).toBe(false);
    });
  });
});

describe('Species', () => {
  describe('Charmander', () => {
    it('should be an instance of FirePokemon', () => {
      const charmander = new Charmander('Charmander', 120, 60, 'fiery dance');
      expect(charmander).toBeInstanceOf(FirePokemon);
    });
    it('should have a move called fiery dance', () => {
      const charmander = new Charmander('Charmander', 120, 60);
      expect(charmander.move).toBe('fiery dance');
    });
  });
  describe('Squirtle', () => {
    it('should be an instance of WaterPokemon', () => {
      const squirtle = new Squirtle('Squirtle', 120, 60, 'water gun');
      expect(squirtle).toBeInstanceOf(WaterPokemon);
    });
    it('should have a move called water gun', () => {
      const squirtle = new Squirtle('Squirtle', 120, 60, 'water gun');
      expect(squirtle.move).toBe('water gun');
    });
  });
});
