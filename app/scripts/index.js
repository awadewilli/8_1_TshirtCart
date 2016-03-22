var $ = require('jquery');
var Handlebars = require('handlebars');
var _ = require('underscore');
var cart = [];

var cartString = localStorage.getItem('cart');
console.log(cartString);

var cartObject = jQuery.parseJSON(cartString);
console.log(cartObject);

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};


$('.addtocart').click(function(e){
  e.preventDefault();
  var formValues = $(this).parent().serializeObject();
  var cartValues = JSON.stringify(formValues);
  cart.push(cartValues);
  console.log(cartValues);
  console.log(cart);
});

$('.checkout').click(function(e){
  localStorage.setItem('cart',cart);
  window.location.replace('./cart.html');
});

$('.complete-checkout').click(function(e){
  localStorage.removeItem('cart',cart);
  window.location.replace('./index.html');
});

$('.delete').click(function(e){
  e.preventDefault();
  console.log('this');
  // cart = _.without(cart,this);
});
var source   = $('#table-template').html();
var template = Handlebars.compile(source);

var context = {'item':cartObject.item, 'price':cartObject.Price, 'size':cartObject.size, 'quantity':cartObject.quantity, time:'500secs'};
var tableHtml = template(context);

$('#cart-table').append(tableHtml);