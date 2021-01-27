$(function () {
  $("#steps > li").css("color", "blue");
  $("#steps li:first,#nested_steps li:first").css("color", "red");
  $("#steps li:nth-child(3)").css("border", "1px solid orange");
  $("p[class]").css("color", "purple");
});
