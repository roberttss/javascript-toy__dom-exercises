window.onload = function() {

  var button = document.getElementById('button');

  button.addEventListener("click", function() {

    // console.log("toggle triggered");

    var hide_mes = document.getElementsByClassName('hide_me');

    // console.log(hide_mes.length);

    for (i in hide_mes) {

      // console.log(i);

      var element = hide_mes[i]

      // console.log(element);

      if (element.style.display==="block")
        element.style.display="none";
      else
        element.style.display="block";
    };

  }); 


};
