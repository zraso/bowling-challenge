function Frame(number) {
  this.total = 0;
  this.rollNumber = 0;
  this.number = number;
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
//can we do the logic with just one roll method?
//can we use the roll number to make sure it doesn't go over limit of rolls
// eg if this.rollNumber = 1 && blah, then secondRoll()
//need to do some front end to get this to work
