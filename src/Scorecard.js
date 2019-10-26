function Scorecard() {
  this.rollScores = [];
  this.frameTotals = [];
  this.total = 0;
  this.frames = [];
  this.frameNumber = 0;
}

Scorecard.prototype.getFrameTotal = function (frame) {
  this.frameTotals.push(frame.total);
  return this.frameTotals.slice(-1).pop();
};

Scorecard.prototype.addFrame = function (frame) {
  this.frames.push(frame);
}

Scorecard.prototype.nextFrame = function() {
  (this.frameNumber)++;
  return new Frame(this.frameNumber);
}

//Maybe I don't need frame total / get frame total?
// Now we need to work out how to keep track of frame numbers
// using array index or keeping number in frame?
//diagram the flow
//diagram front end / start creating to help build
