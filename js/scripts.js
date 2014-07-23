var Hangman = {
  initialize: function(randomPhrase) {
    this.name = randomPhrase;
    this.wordLength = randomPhrase.length;
    this.result = [];
    this.blankArray= function () {
      for ( var i=0; i < this.wordLength; i++ ) {
        this.result[i] = ("_");
      }
    };
  },
  matchesLetters: function(userInput) {
    var outputResult = [];
    var position = this.name.indexOf(userInput);
    var positionCheck = this.result.indexOf(userInput);
    if (position >= 0) {
      if (positionCheck >= 0) {
        return false;
      } else {
        this.result[position] = userInput;
      }
    } else if (position === -1) {
       return false;
    }
  }
};






$(document).ready(function() {
  var currentHangman;
  var gamestatus = 1;
  $("#create-a-game").click(function () {
    var listOfWords = ["uncopyrightable", "hunters", "troublemaking", "metalwork", "boyfriends", "clothespins"];

    var myHangman = Object.create(Hangman)
    myHangman.initialize(listOfWords[parseInt(Math.random()*6)]);
    myHangman.blankArray();
    currentHangman = myHangman;

    $("#default-image").show();
    $("#new-game").show();
  });

  $("form#add-letter").submit(function (event) {
    event.preventDefault();

    var userInput = $("input#input-letter").val();
    var output = currentHangman.matchesLetters(userInput);

    $("#input-letter").val('');

    if (output === false) {
      alert("Try again.");

      if(gamestatus < 7) {
        gamestatus += 1;
      } else {
        alert("GAME OVER");
      }
      $("#default-image").hide();
      $("#image").empty().append("<img src='img/hangman" + gamestatus + ".png'>");

    } else {
       $("#show-result").text(currentHangman.result.join(" "));
    }

  });
});