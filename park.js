var Park = function () {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaurByType = function (type) {
  var dinosaursToKeep = [];
  for (var dinosaur of this.enclosure) {
    if (dinosaur.type !== type)
      dinosaursToKeep.push(dinosaur);
  }
  this.enclosure = dinosaursToKeep;
}

Park.prototype.dinosaursWithOffSpringMoreThan = function (amount) {
  var matchingDinosaurs = [];
  for (var dinosaur of this.enclosure) {
    if (dinosaur.annualOffspring > amount) {
      matchingDinosaurs.push(dinosaur);
    }
  }
  return matchingDinosaurs;
}

Park.prototype.breedDinosaurs = function () {
  var babies = [];
  for (var dinosaur of this.enclosure) {
    for (var offspring = 0; offspring < dinosaur.annualOffspring; offspring++){
      var baby = dinosaur.makeBaby();
      babies.push(baby);
    }
  }
  for (var baby of babies){
    this.addDinosaur(baby);
  }
}

Park.prototype.advanceTime = function (years) {
  for (var year = 0; year < years ; year++) {
      this.breedDinosaurs();
  }
}


module.exports = Park;