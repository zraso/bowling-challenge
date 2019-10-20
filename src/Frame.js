function Frame() {
  this.total = 0;
  this.index = 1;
  this.rollNumber = 0;
  this.scores = [];
  this.status = 'incomplete';
}

Frame.prototype.firstRoll = function (knockedPins) {
  this.rollNumber += 1;
  this.total += knockedPins;

  if (knockedPins < 10) {
    this.scores.push(knockedPins);
    this.secondRoll
  }
  else {
    this.scores.push(knockedPins)
    this.status = 'strike'
  }
};

Frame.prototype.secondRoll = function (knockedPins) {
  this.rollNumber += 1;
  this.total += knockedPins;
  this.scores.push(knockedPins);
  if ((this.scores[0] + knockedPins) === 10) {
    this.status = 'spare';
  }
  else {
    this.status = 'complete';
  }
};
