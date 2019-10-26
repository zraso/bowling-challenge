describe('Scorecard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = new Frame();
  });

  describe('frame scores', function () {
    it('collects score after each frame', function () {
      frame.firstRoll(5);
      frame.secondRoll(3);
      expect(scorecard.getFrameTotal(frame)).toEqual(8);
    });
  });

//try 'type of'
  describe('add frame', function () {
    it('generates the next frame', function() {
      newframe = new Frame();
      scorecard.addFrame(newframe);
      expect(scorecard.frames).toContain(jasmine.objectContaining(newframe));
    });
  });

  describe('newFrame', function() {
    it('creates a new frame', function(){
      frame = scorecard.nextFrame()
      frame.firstRoll(3);
      frame.secondRoll(5);
      frame2 = scorecard.nextFrame()
      expect(frame2.status).toEqual('incomplete');
      expect(frame2.number).toEqual(2);
    });
  });

});
