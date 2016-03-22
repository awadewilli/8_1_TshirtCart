console.log("Hello World!");

document.cookie = "Austin";
document.cookie = "likes-cookies=yes";

console.log(document.cookie);
var loggedInUser = document.cookie;

var cookies = loggedInUser.split(';');
for(var i=0; i<cookies.length; i++){
  console.log(cookies[i]);
}


localStorage.setItem('favorite','oreo');
console.log(localStorage.getItem('favorite'));

 localStorage.setItem('leastfavorite','bannana');
 console.log(localStorage.getItem('leastfavorite'));

 localStorage.removeItem('leastfavorite','bannana');
 console.log(localStorage.getItem('leastfavorite'));

var stuff = {};
stuff.lunch = 'pizza';
stuff.dinner = 'chips';
stuff.dessert = 'ice-cream';

localStorage.setItem('stuff',JSON.stringify(car));
console.log(localStorage.getItem('stuff'));
