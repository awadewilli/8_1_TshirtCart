var $ = require('jquery');
var Handlebars = require('handlebars');
var _ = require('underscore');
var cart = [];

var cartString = localStorage.getItem('cart');
console.log(cartString);
var cartObjects = jQuery.parseJSON(cartString);
console.log(cartObjects);

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};


$('.addtocart').click(function(e){
  e.preventDefault();
  var formValues = $(this).parent().serializeObject();
  cart.push(formValues);
});

$('.checkout').click(function(e){
  localStorage.setItem('cart',JSON.stringify(cart));
  window.location.replace('./cart.html');
});

$('.complete-checkout').click(function(e){
  localStorage.removeItem('cart',cart);
  window.location.replace('./index.html');
});



var source   = $('#table-template').html();
var template = Handlebars.compile(source);


cartObjects.map(function(cartItem){
  complile(cartItem);
});

function complile(cartObject){
var context = {'item':cartObject.item, 'price':cartObject.Price, 'size':cartObject.size, 'quantity':cartObject.quantity, time:'500secs'};
var tableHtml = template(context);

$('#cart-table').append(tableHtml);
}

$('.delete').click(function(e){
  e.preventDefault();

});
