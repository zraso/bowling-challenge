function Scorecard() {
  this.rollScores = [];
  this.frameTotals = [];
  this.total = 0;
}

Scorecard.prototype.getFrameTotal = function (frame) {
  this.frameTotals.push(frame.total);
  const array = this.frameTotals;
  return array.slice(-1).pop();
};
