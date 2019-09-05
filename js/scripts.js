//backend logic

//pizza constructer
function Pizza(size, topping, side) {
  this.size = size,
  this.topping = topping,
  this.side = side
}
//prototype method to calculate total cost
Pizza.prototype.totalCost = function() {
  return this.size + this.topping + this.side;
}

//ui
$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    var userName = $("input#name").val();
    var phone = $("input#phone").val();
    var sizes = parseInt($("select#size").val());
    var toppings = parseInt($("select#topping").val());
    var salad = parseInt($("select#salad").val());
    var knots = parseInt($("select#garlicKnots").val());
    var cookie = parseInt($("select#cookie").val());
    var brownie = parseInt($("select#brownie").val());
    var sides = (knots + salad + cookie + brownie);
    var newPizza = new Pizza (sizes, toppings, sides);
    var total = newPizza.totalCost();
    if (total === 0 || newPizza.topping > newPizza.size) {
      $(".noToppings").hide();
      $(".zero").show();
    }
    else if (newPizza.size >= 1 && newPizza.topping === 0) {
      $(".zero").hide();
      $(".noToppings").show();

    }
    else if (userName === "" || phone ==="") {
      $(".zero").hide();
      $(".noToppings").hide();
      $(".noName").show();

    }
    else {
      $(".zero").hide();
      $(".noToppings").hide();
      $(".noName").hide();

      $(".output").show();
      $("#nameOutput").text(userName);
      $("#totalOutput").text(total);
    }
  });
});
