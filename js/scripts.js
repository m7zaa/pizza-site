// var userName
// var sizes
// var toppings
// var total

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
    var userName = parseInt($("input#userName").val());
    var sizes = parseInt($("select#size").val());
    var toppings = parseInt($("select#topping").val());
    var newPizza = new Pizza (sizes, toppings);
    var total = newPizza.totalCost();
    console.log(newPizza);
    console.log(total);









  });
});
