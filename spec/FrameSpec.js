describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('keeps total', function () {
    it('total starts at 0', function () {
      expect(frame.total).toEqual(0);
    });

    it('increases when a ball is rolled', function () {
      for (let i=0; i<5; i++) { frame.firstRoll(3); }
      expect(frame.total).toEqual(15);
    });
  });

  describe('roll', function () {
    it('logs roll number', function () {
      frame.firstRoll();
      expect(frame.rollNumber).toEqual(1);
    });

    it('logs first roll score', function () {
      frame.firstRoll(5);
      expect(frame.scores[0]).toEqual(5);
    });

    it('logs second roll score', function () {
      frame.firstRoll(5);
      frame.secondRoll(3);
      expect(frame.scores[1]).toEqual(3);
    });
  });

  describe('frameStatus', function() {
    it('when normal round, logs complete when two rolls have been made', function(){
      frame.firstRoll(3);
      frame.secondRoll(5);
      expect(frame.status).toEqual('complete');
    });
  });

});
