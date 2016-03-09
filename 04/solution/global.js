window.onload = function() {

  var button = document.getElementById('toggle_button');

  button.addEventListener("click", function() {

    var movieList = document.querySelectorAll("ul.second_five li");

    var i;

    for (i = 0; i < movieList.length; i++) {
        if (movieList[i].style.display==="block")
          movieList[i].style.display="none";
        else
          movieList[i].style.display="block";
    }

  });

};
