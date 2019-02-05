var nav = document.querySelector('nav');
var body = document.querySelector('body');
var header = document.querySelector('header');
var scrollTitle = document.getElementById('scrollTitle');

document.addEventListener("DOMContentLoaded", function(event) {

    window.addEventListener('scroll', function(){
        
        if (window.pageYOffset > 150) {
            scrollTitle.classList.add('scrollDown');
            scrollTitle.classList.remove('scrollUp');
        } else  {
            scrollTitle.classList.remove('scrollDown');
            scrollTitle.classList.add('scrollUp');

            console.log("scrollUp");
        }
    });

    
});