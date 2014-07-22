describe("Hangman", function () {
  describe("initialize", function () {
    it("sets word to randomPhrase", function () {
      var myHangman = Object.create(Hangman);
      myHangman.initialize("ellen");
      myHangman.name.should.equal("ellen");
    });
  });
  describe("matchesLetters", function() {
    it("returns inputted letter if it matches in the given phrase", function() {
      var myHangman = Object.create(Hangman);
      myHangman.initialize();
      myHangman.matchesLetters("a");
      myHangman.result.should.equal("a");
    });
  });
});
