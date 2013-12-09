$(document).ready(function() {

function FormValidation () 
{
  var valid = $("#validate").val(); 
  $(".errlist").empty();
  if (valid == "" || valid == " " || isNaN(valid))
  {
    $("<li>Ivalid Input. Must be numbers!</li>").appendTo(".errlist");
  }
  else if (valid == 0)
  {
    $("<li>Nothing to do, you entered zero.</li>").appendTo(".errlist");
  }
  else
  {
    var numVal = parseInt(valid);
    x = " ";
    for (i = numVal; i > 0; i--) 
    {
      switch(numVal) {
        case 1:
          $("<li>Thank you for entering the number 1!</li>").appendTo(".errlist");
          break;
        default:
          x = x + "<li>Countdown: " + i;
          $(".errlist").html(x);
      }
    }
  }
}

$("#submitbtn").click(FormValidation);  
});