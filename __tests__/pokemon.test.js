const { Pokemon } = require('../pokemon');

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
    const gengar = new Pokemon('Gengar', 'ghost', 60, 40, 'scratch');
    expect(meowth.isEffectiveAgainst(gengar)).toBe(false);
  });
  it('should have an isEffectiveAgainst method that returns true if pokemon type is not normal', () => {
    const meowth = new Pokemon('Meowth', 'normal', 100, 12, 'scratch');
    const gengar = new Pokemon('Gengar', 'ghost', 60, 40, 'scratch');
    expect(gengar.isEffectiveAgainst(meowth)).toBe(true);
  });
  it('should have an isWeakTo method that returns false if type is normal', () => {
    const squirtle = new Pokemon('Squirtle', 'water', 100, 12, 'bubble gun');
    const persian = new Pokemon('Persian', 'normal', 60, 40, 'scratch');
    expect(persian.isWeakTo(squirtle)).toBe(false);
  });
  it('should have an isWeakTo method that returns true if type is not normal', () => {
    const squirtle = new Pokemon('Squirtle', 'water', 100, 12, 'bubble gun');
    const persian = new Pokemon('Persian', 'normal', 60, 40, 'scratch');
    expect(squirtle.isWeakTo(persian)).toBe(true);
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
