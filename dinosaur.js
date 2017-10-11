var Dinosaur = function(type, annualOffspring){
  this.type = type;
  this.annualOffspring = annualOffspring;
}

Dinosaur.prototype.giveBirth = function(){
  var offspring = [];
  for (var i = 0; i < this.annualOffspring; i++){
    var baby = new Dinosaur(this.type, this.annualOffspring);
    offspring.push(baby);
  }
  return offspring;
}

module.exports = Dinosaur;