$(function () {
  $("#btn_1").on("click", function () {
    // $("div.main").load(
    //   "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt"
    // );
    // $("div.main").load(
    //   "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html"
    // );
    // $("div.main").load(
    //   "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html table fieldset:first"
    // );

    // $.ajax(
    //   "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html",
    //   {
    //     dataType: "html",
    //     method: "GET",
    //     success: function (response) {
    //       $("div.main").html(response);
    //     },
    //     error: function (request, errorType, errorMsg) {
    //       console.log("errorMsg", errorMsg);
    //     },
    //   }
    // );

    // $.ajax("https://jsonplaceholder.typicode.com/posts/1", {
    //   dataType: "json",
    //   method: "GET",
    //   success: function (response) {
    //     console.log(response);
    //     $("div.main").append($("<p>").text("User ID: " + response.userId));
    //   },
    //   error: function (request, errorType, errorMsg) {
    //     console.log("errorMsg", errorMsg);
    //   },
    // });

    $.ajax("https://jsonplaceholder.typicode.com/comments", {
      dataType: "json",
      method: "GET",
      data: { postId: 1 },
      success: function (response) {
        console.log(response);

        response.forEach((comment) => {
          $("div.main").append($("<p>").text("Name: " + comment.name));
        });
      },
      error: function (request, errorType, errorMsg) {
        console.log("errorMsg", errorMsg);
      },
    });
  });
});
