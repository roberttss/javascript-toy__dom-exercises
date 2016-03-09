window.onload = function() {

  var button = document.getElementById('button');

  button.addEventListener("click", function() {

    var hide_mes = document.getElementsByClassName('hide_me');

    var i;

    for (i = 0; i < hide_mes.length; i++) {
        if (hide_mes[i].style.display==="block")
          hide_mes[i].style.display="none";
        else
          hide_mes[i].style.display="block";
    }

  });

};