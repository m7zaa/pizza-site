var userName
var sizes
var toppings
var total

function Pizza(size, topping) {
  this.size = size,
  this.topping = topping
}

Pizza.prototype.totalCost = function() {
  return sizes + toppings;
}

$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    userName = $("input#userName").val();
    sizes = parseInt($("select#size").val());
    toppings = parseInt($("select#topping").val());
    var newPizza = new Pizza (sizes, toppings);
    total = newPizza.totalCost();
    console.log(newPizza);
    console.log(total);
    console.log(userName);
    $("#name").text(userName);









  });
});
