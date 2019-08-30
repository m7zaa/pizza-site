//backend logic

var userName
var phone
var sizes
var toppings
var total
var salad
var knots
var cookie
var brownie
var sides

//pizza constructer
function Pizza(size, topping, side) {
  this.size = size,
  this.topping = topping,
  this.side = side
}
//prototype method to calculate total cost
Pizza.prototype.totalCost = function() {
  return sizes + toppings + sides;
}

//ui
$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    userName = $("input#name").val();
    phone = $("input#phone").val();
    sizes = parseInt($("select#size").val());
    toppings = parseInt($("select#topping").val());
    salad = parseInt($("select#salad").val());
    knots = parseInt($("select#garlicKnots").val());
    cookie = parseInt($("select#cookie").val());
    brownie = parseInt($("select#brownie").val());
    sides = (knots + salad + cookie + brownie);
    var newPizza = new Pizza (sizes, toppings, sides);
    total = newPizza.totalCost();
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
