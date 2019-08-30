var userName
var sizes
var toppings
var total
var salad
var knots
var cookie
var brownine
var sides

function Pizza(size, topping, side) {
  this.size = size,
  this.topping = topping;
  this.side = side
}

Pizza.prototype.totalCost = function() {
  return sizes + toppings + sides;
}

$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    userName = $("input#name").val();
    sizes = parseInt($("select#size").val());
    toppings = parseInt($("select#topping").val());

    salad = parseInt($("select#salad").val());
    knots = parseInt($("select#garlicKnots").val());
    cookie = parseInt($("select#cookie").val());
    brownie = parseInt($("select#brownie").val());
     sides = (knots + salad);
    var newPizza = new Pizza (sizes, toppings, sides);
    total = newPizza.totalCost();
    $(".output").show();
    $("#nameOutput").text(userName);
    $("#totalOutput").text(total);



console.log(sides);




  });
});
