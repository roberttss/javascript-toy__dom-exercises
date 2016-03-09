window.onload = function() {

  var button = document.getElementById('button');

  button.addEventListener("click", function() {

    // console.log("toggle triggered");

    var hide_mes = document.getElementsByClassName('hide_me');

    // console.log(hide_mes.length);

    // example:
    //
    // numbers.forEach(
    //   function addNumber(value) { sum += value; }
    // );

    hide_mes.forEach(
      function toggle(element) {

      if (element.style.display==="block")
        element.style.display="none";
      else
        element.style.display="block";

      }

    );
    // end of forEach loop

  });
  // end of on click


};
// end of on load
