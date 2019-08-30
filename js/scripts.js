var userName
var sizes
var toppings
var total
var salad
var knots
var cookie
var brownine

function Pizza(size, topping) {
  this.size = size,
  this.topping = topping
}

Pizza.prototype.totalCost = function() {
  return sizes + toppings + salad;
}

$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    userName = $("input#name").val();
    sizes = parseInt($("select#size").val());
    toppings = parseInt($("select#topping").val());
    salad = $("#salad").val();

    var newPizza = new Pizza (sizes, toppings);
    total = newPizza.totalCost();
    $(".output").show();
    $("#nameOutput").text(userName);
    $("#totalOutput").text(total);



console.log(salad);




  });
});
