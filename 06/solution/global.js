window.onload = function() {

  var triggerButton = document.getElementById("firstButton");

  var secondButton = document.getElementById("secondButton");

  triggerButton.addEventListener("click", function() {

    secondButton.addEventListener("click", function() {
      alert("You did it!")
    });
    //end of secondButton eventListener

  });
  //end of triggerButton eventListener function

};