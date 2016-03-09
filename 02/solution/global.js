window.onload = function() {

  var button = document.getElementById('button');

  button.addEventListener("click", function() {

    var hide_me = document.getElementById('hide_me');

    if (hide_me.style.display==="block")
      hide_me.style.display="none"
    else
      hide_me.style.display="block"
  });

};


    



