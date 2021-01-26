$("#btn_main").on("click", function () {
  $(".dope").text("New text");
  $("#btn_main").val("Try double click");
});

$("#btn_main").on("dblclick", function () {
  $(".dope").text("Old text");
  $(this).val("Replace");
});

$("#btn_html").on("click", function () {
  $(".dope").html("<b class='cool'>This is HTML</b>");
});
