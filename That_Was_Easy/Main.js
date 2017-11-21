
function sayThatWasEasy() {
var thatWasEasy = new Audio("that_was_easy.mp3");
 thatWasEasy.play();

}

$("#easy").on("UP_ARROW, sayThatWasEasy");

$(document).keypress(UP_ARROW);

 function delegateKeypress(event) {
     if (event.charCode == 32) {
       $("#easy").trigger("UP_ARROW");
     }
 }     