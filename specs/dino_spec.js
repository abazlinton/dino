var assert = require('assert');
var Dinosaur = require('../dinosaur');

var dinosaur;

beforeEach(() => {
  dinosaur = new Dinosaur("T-Rex", 2);
});

describe('Dinosaur', () => {
  it('has a type', () => {
    assert.strictEqual(dinosaur.type, "T-Rex");
  });

  it('has a no of offspring per year', () => {
    assert.strictEqual(dinosaur.annualOffspring, 2);
  });

  it('can make babies', () => {
    var baby = dinosaur.makeBaby();
    assert.strictEqual(baby instanceof Dinosaur, true);
    assert.strictEqual(baby.annualOffspring, 2);
    assert.strictEqual(baby.type, "T-Rex");
  });
  
});