$("#box").show();

$("#target").on("click", function () {
  // the code in here will be executed when the user clicks firstbtn element
  // $("p#statement").hide();
  $("#box").toggle();
  $("#box").slideDown(2000);
  $("#box").slideUp(2000);
  $("#box").slideToggle();
  $("#box").fadeIn(1000);
  $("#box").fadeTo(1000, 0.5);
  $("#box").fadeOut(1000);
  $("#box").fadeToggle(1000);
});

$("#firstBtn").on("click", function () {
  $("#statement").hide();
});
