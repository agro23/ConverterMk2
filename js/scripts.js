// Back End:
var oz = function(number1) {
  return number1 * 28.35;
};

var lbs = function(number1) {
  return number1 * 16 * 28.35;
};

var tbs = function(number1) {
  return number1 * 0.066666666666667;
};


// Front End:

$(document).ready(function() {
  $("form#oz").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#oz").val());
    var result = oz(number1);
    $("#output").text(result);
  });
  $("form#lbs").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#lbs").val());
    var result = lbs(number1);
    $("#output").text(result);
  });
  $("form#tbs").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#tbs").val());
    var result = tbs(number1);
    $("#output").text(result);
  });

});
