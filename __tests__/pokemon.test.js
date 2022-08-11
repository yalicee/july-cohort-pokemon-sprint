const { Pokemon } = require("../pokemon");

describe("Pokemon", () => {
  it("should be an instance of a Pokemon", () => {
    const scraggy = new Pokemon("Scraggy");
    expect(scraggy).toBeInstanceOf(Pokemon);
  });
  it("should have a name property", () => {
    const scraggy = new Pokemon("Scraggy");
    expect(scraggy).toHaveProperty("name");
    expect(scraggy.name).toBe("Scraggy");
  });
  it("should have a type property ", () => {
    const scraggy = new Pokemon("Scraggy");
    expect(scraggy).toHaveProperty("type");
    expect(scraggy.type).toBe("normal");
  });
  it("should update type property if passed as an argument", () => {
    const slowking = new Pokemon("Slow King", "water");
    expect(slowking.type).toBe("water");
  });
  it("should have a hitPoints property ", () => {
    const scraggy = new Pokemon("Scraggy", "normal", 100);
    expect(scraggy).toHaveProperty("hitPoints");
    expect(typeof scraggy.hitPoints).toBe("number");
    expect(scraggy.hitPoints).toBe(100);
  });
  it("should have a attackDamage property ", () => {
    const scraggy = new Pokemon("Scraggy", "normal", 100, 12);
    expect(scraggy).toHaveProperty("attackDamage");
    expect(typeof scraggy.attackDamage).toBe("number");
    expect(scraggy.attackDamage).toBe(12);
  });
  it("should have a move property ", () => {
    const scraggy = new Pokemon("Scraggy", 100, 12);
    expect(scraggy).toHaveProperty("move");
    expect(typeof scraggy.move).toBe("string");
    expect(scraggy.move).toBe("tackle");
  });
});
