const MENU = document.getElementById('navigation');

MENU.addEventListener("click", (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

var next = document.getElementById('slider_left');
var prew = document.getElementById('slider_right');

var slides = document.getElementsByClassName('slider');
for(var i=0; i<slides.length; i++) {
   slides[i].style.zIndex = slides.length - i;
}

next.onclick = function () {
    var activeEl = document.querySelector('.active');
    if(activeEl.nextElementSibling) {
       activeEl.style.left = "-100%";
       activeEl.classList.remove('active');
       activeEl.nextElementSibling.classList.add('active');
       this.classList.remove('no_active');
       prew.classList.remove('no_active');
       if(!activeEl.nextElementSibling.nextElementSibling) {
          this.classList.add('no_active');
       }
    }
}
prew.onclick = function () {
    var activeEl = document.querySelector('.active');
    if(activeEl.previousElementSibling) {
       activeEl.previousElementSibling.style.left = "0%";
       activeEl.classList.remove('active');
       activeEl.previousElementSibling.classList.add('active');
       this.classList.remove('no_active');
       next.classList.remove('no_active');
       if(!activeEl.previousElementSibling.previousElementSibling) {
          this.classList.add('no_active');
       }
    }
}
