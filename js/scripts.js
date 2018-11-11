// Scripts
console.log('Heya');


$(window).scroll(function() {
var theta = $(window).scrollTop() / 50 % Math.PI;
$('#craycray').css({ transform: 'rotate(' + theta + 'rad)' });
});