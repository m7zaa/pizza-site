

function Pizza(size, topping) {
  this.size = size,
  this.topping = topping
}

Pizza.prototype.totalCost = function() {

}

$(document).ready(function() {
  var userName = $("input#userName").val();
  var size = $("select#size").val();
  var topping = $("select#topping").val();
  var newPizza = new Pizza (size, topping)
  $("#pizza-order").submit(function(event) {











  });
});
