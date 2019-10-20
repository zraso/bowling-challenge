function Scorecard() {
  this.rollScores = [];
  this.frameTotals = [];
  this.total = 0;
}

Scorecard.prototype.getFrameTotal = function (frame) {
  this.frameTotals.push(frame.total);
  return this.frameTotals
};
