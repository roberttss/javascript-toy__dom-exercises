window.onload = function() {

  var firstButton = document.getElementById("firstButton");

  var secondButton = document.getElementById("secondButton");

  firstButton.addEventListener("click", addSecondaryEventListener(secondButton));
  //end of triggerButton eventListener function

  function addSecondaryEventListener(obj) {

    obj.addEventListener("click", function() {
      alert("You did it!")
    });
    //end of secondButton eventListener

  }
  //end of secondary function.

};