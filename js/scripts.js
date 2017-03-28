$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();
    var inputString = $("#sentence").val();
    var newArray = inputString.split("");

    for (var index=0; index <newArray.length; index++)
    {
      if(newArray[index] === "a" || newArray[index] === "e" || newArray[index] === "i" || newArray[index] === "o" || newArray[index] === "u") {
        newArray[index] = "-";
      }
    }

    var output = newArray.join("");
    $("p").text(output);

  });

});
