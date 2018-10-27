// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

// console.log('Hello, Doomlord');

var prev = 0;
var $window = $(window);
var nav = $('.nav');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});