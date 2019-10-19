describe('Scorecard', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('keeps total', function () {
    it('total starts at 0', function () {
      expect(frame.total).toEqual(0);
    });

    it('increases when a ball is rolled', function () {
      for (let i=0; i<5; i++) { frame.roll(3); }
      expect(frame.total).toEqual(15);
    });
  });

  describe('roll', function () {
    it('logs roll number', function () {
      frame.roll();
      expect(frame.rollNumber).toEqual(1);
    });

    it('logs first roll score', function () {
      frame.roll(5);
      expect(frame.firstScore).toEqual(5);
    });

    it('logs second roll score', function () {
      frame.roll(5);
      frame.roll(3);
      expect(frame.secondScore).toEqual(3);
    });
  });
});

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();
//
//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });
//
//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });
//
//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');
//
//     player.play(song);
//     player.makeFavorite();
//
//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });
//
//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);
//
//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
