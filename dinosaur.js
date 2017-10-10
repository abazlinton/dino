var Dinosaur = function(type, annualOffspring){
  this.type = type;
  this.annualOffspring = annualOffspring;
}

Dinosaur.prototype.makeBaby = function(){
  return new Dinosaur(this.type, this.annualOffspring);
}

module.exports = Dinosaur;