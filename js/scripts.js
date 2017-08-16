$(document).ready(function(){
  $("#leapForm").submit(function(event){
    event.preventDefault();
    var num = parseInt($("input#leapNum").val());
    var result = leapYear(num);
    $('#result').text(result);
  });
});

// *** Backend ***
function leapYear(year) {
  if (year % 4 == 0 || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
