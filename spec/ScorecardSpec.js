describe('Scorecard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = new Frame();
  });

  describe('frame scores', function () {
    it('collects score after each frame', function () {
      frame = new Frame;
      frame.roll(5);
      frame.roll(3);
      expect(scorecard.getFrameTotal(frame)).toEqual(8);
    });
  });

});
