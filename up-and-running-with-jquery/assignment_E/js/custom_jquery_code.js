$(function () {
  $("#btn_1").on("click", function () {
    const name = $("#course_name").children("input").first().val();
    const statement = $("#statement").children("h3").first();

    statement.text(name);
    statement.css({ "background-color": "green", color: "white" });
  });

  $("li").on("click", function (event) {
    const name = $("#course_name").children("input").first().val();
    const el = $("<li>").text(name);

    el.css("background-color", "yellow");

    $(this).append(el);

    event.stopPropagation();
  });
});
