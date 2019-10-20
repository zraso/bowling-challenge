function Frame() {
  this.total = 0;
  this.rollNumber = 0;
  this.firstScore = 0;
  this.secondScore = 0;
  this.status = 'incomplete';

Frame.prototype.roll = function (knockedPins) {
  this.rollNumber += 1;
  this.total += knockedPins;

  if (this.rollNumber == 1) {
    this.firstScore += knockedPins
  }
  else {
    this.secondScore += knockedPins
  }
};
}
