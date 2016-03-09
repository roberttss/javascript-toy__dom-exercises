window.onload = function() {

  var submit = document.getElementById("submit");

  submit.addEventListener("click", function() {

    var divToAppend = document.getElementById("append");

    var formValue = document.getElementById("name").value;

    divToAppend.innerHTML = ("Hi, " + formValue + "!");

  });

};