$("button").on("click", function () {
  const qty = parseFloat($("#quant_1").val());
  const rate = parseFloat($("#rate_1").val());
  const amount = qty * rate;
  $("#amount_1").show().val(amount);
  $("#output").text("Amount Charged for quantity of " + qty + " is $" + amount);
});
