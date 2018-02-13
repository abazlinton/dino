const Park = function () {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaurByType = function (type) {
  const dinosaursToKeep = [];
  for (const dinosaur of this.enclosure) {
    if (dinosaur.type !== type)
      dinosaursToKeep.push(dinosaur);
  }
  this.enclosure = dinosaursToKeep;
}

Park.prototype.dinosaursWithOffSpringMoreThan = function (amount) {
  const matchingDinosaurs = [];
  for (const dinosaur of this.enclosure) {
    if (dinosaur.annualOffspring > amount) {
      matchingDinosaurs.push(dinosaur);
    }
  }
  return matchingDinosaurs;
}

Park.prototype.breedDinosaurs = function () {
  let allOffspring = [];
  for (const dinosaur of this.enclosure) {
    allOffspring = allOffspring.concat(dinosaur.giveBirth());
  }
  this.enclosure = this.enclosure.concat(allOffspring);
}

Park.prototype.advanceTime = function (years) {
  for (let year = 0; year < years; year++) {
    this.breedDinosaurs();
  }
}


module.exports = Park;