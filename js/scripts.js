// Scripts
console.log('Heya');


$(document).ready(function(e) {
  
  
  var lastScrollTop, incr = 0;
  var menuSpace = 20; startsOn = 80;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    
    if (st > startsOn){
      if (st > lastScrollTop){
        incr++;
        if (incr >= menuSpace){
          $('nav').addClass('hide');
          incr = menuSpace;
        }
      } else {
        incr -= 1;
        if (incr <= 5){
          $('nav').removeClass('hide');
          incr = 0;
        }
      }
    } else {
      $('nav').removeClass('hide');
    }
    lastScrollTop = st;
  });
  
  
});




function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);