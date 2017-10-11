var assert = require('assert');
var Dinosaur = require('../dinosaur');

var dinosaur;

beforeEach(function () {
  dinosaur = new Dinosaur("T-Rex", 2);
});

describe('Dinosaur', function () {
  it('has a type', function () {
    assert.strictEqual(dinosaur.type, "T-Rex");
  });

  it('has a no of offspring per year', function () {
    assert.strictEqual(dinosaur.annualOffspring, 2);
  });

  it('can make babies', function () {
    var expectedBabies = [dinosaur, dinosaur];
    var actualBabies = dinosaur.giveBirth();
    assert.deepStrictEqual(actualBabies, expectedBabies);
  });

});