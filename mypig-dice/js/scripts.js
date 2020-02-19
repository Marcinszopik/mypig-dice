
var dieOne = 0;
var dieTwo = 0;
var tempScore = 0;
var player = true;
var playerOneScore  = 0;
var playerTwoScore = 0;
var doubles = false;


<<<<<<< HEAD
function rollDice(){
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status.innerHTML = "You rolled "+diceTotal+".";
=======
PigDice.prototype.roll = function() {
    var dieOne = Math.ceil(dice.RollDie(1, 6));
    var dieTwo = Math.ceil(dice.RollDie(1, 6));
    console.log(dieOne, dieTwo);
    if (doubles) {
        $("button#hold").prop("disabled", false);
        doubles = false;
    }
    if (dieOne === 1 && dieTwo === 1) {
        tempScore = 0;
        if (player) {
            playerOneScore = 0;
            $("#playerOneResults").html(" 0");
        } else if (!player) {
            playerTwoScore = 0;
            $("playerTwoResults").html(" 0");
        }
        player = !player;
        $("#rolledResult").html("snake eyes and lost all your points!");
    } else if (dieOne === 1 || dieTwo === 1) {
        tempScore = 0;
        player = !player;
        $("#rolledResult").html(dieOne + " and " + dieTwo + "!");
    } else if (dieOne === dieTwo) {
      tempScore += (dieOne + dieTwo);
      $("#currentScore").html();
      $("#rolledResult").html("doubles, " + dieOne + " and " + dieTwo + "Roll again!");
      $("button#hold").prop("disabled", true);
      doubles = true;
  } else {
      tempScore += (dieOne + dieTwo);
      $("#rolledResult").html((dieOne.toString()) + " and " + dieTwo.toString())
  }
  return tempScore;
}
>>>>>>> 386af71827b17fda6eabc4d22b6ad6c17d88a53b

  if(d1 == d2){
      status.innerHTML += " DOUBLES! You get a free turn!!";
  }
}
