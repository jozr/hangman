describe("Hangman", function () {
  describe("initialize", function () {
    it("sets word to randomPhrase", function () {
      var testHangman = Object.create(Hangman);
      testHangman.initialize("ellen");
      testHangman.name.should.equal("ellen");
    });
  });
  describe("matchesLetters", function() {
    it("returns inputted letter if it matches in the given phrase", function() {
      var testHangman = Object.create(Hangman);
      testHangman.initialize();
      testHangman.matchesLetters("a");
      testHangman.result.should.equal("a");
    });
  });
});
