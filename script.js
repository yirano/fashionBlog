var nav = document.querySelector('nav');
var body = document.querySelector('body');
var header = document.querySelector('header');
var scrollTitle = document.getElementById('scrollTitle');

document.addEventListener("DOMContentLoaded", function(event) {
    
    window.addEventListener('scroll', function(){
        
        if (window.pageYOffset >= 100) {
            scrollTitle.classList.add('scrollThisAnim');
            scrollTitle.classList.remove('scrollUp');
        } else if (window.pageYOffset > 0 && window.pageYOffset < 100){
            scrollTitle.style.display ='block';

        } else {
            scrollTitle.classList.remove('scrollThisAnim');
            scrollTitle.classList.add('scrollUp');
        }
    });
  });