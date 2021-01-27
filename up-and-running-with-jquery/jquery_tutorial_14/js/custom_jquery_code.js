$(function () {
  $("button").on("click", function (event) {
    const button = $(this);
    const parent = button.parent();
    const author = parent.data("author");
    const price = parent.data("price");
    const purchased = parent.data("purchased");
    const myRating = parent.data("my-rating");

    parent.css("background-color", "yellow");
    parent.append($("<p>Author: " + author + "</p>"));

    if (price !== undefined) {
      parent.append($("<p>Price: $" + price + "</p>"));
    }

    if (purchased !== undefined) {
      parent.append($("<p>Purchased: " + purchased + "</p>"));
    }

    if (myRating !== undefined) {
      parent.append($("<p>My Rating: " + myRating + "</p>"));
    }

    button.remove();

    event.stopPropagation();
  });

  $("div.book").on("click", function () {
    alert("Click on the see details button to see the price of the book.");
  });
});
