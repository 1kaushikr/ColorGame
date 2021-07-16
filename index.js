var gmpat = [];
// var userClickedPattern = [];
var btnclrs = ["blue", "red", "yellow", "green"];
var level = 0;

$(document).keydown(next);
var toggle = 0;

function next() {
  if (toggle === 0) {
    nextSequence();
    tog = 0;
    toggle = 1;
  }
}
var tog = 1;
var temp = 0;
$(".btn").click(function() {
  if (tog == 0) {
    var userChosenColour = $(this).attr("id");
    // userClickedPattern.push(userChosenColour);
    if (userChosenColour == gmpat[temp]) {
      playsound(userChosenColour);
      animatePress(userChosenColour);
      if (temp == (level - 1)) {
        nextSequence();
        temp = 0;
      } else {
        temp = temp + 1;
      }
    } else {
      $("h1").text("Game Over, Press any key to Restart the Game.");
      playsound("wrong");
      gmpat = [];
      toggle = 0;
      tog = 1;
      level = 0;
      temp = 0;
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);
    }
  } else {
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
  }
});


function nextSequence() {
  setTimeout(function() {
    $("h1").text("Level " + level);
    level = level + 1;
    var h = Math.floor(Math.random() * 4);
    var rancol = btnclrs[h];
    gmpat.push(rancol);
    $("#" + rancol).fadeOut(100).fadeIn(100);
    playsound(rancol);
  }, 1000);
}


function playsound(h) {
  var audio = new Audio("sounds/" + h + ".mp3");
  audio.play();
}

function animatePress(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 100);
}
