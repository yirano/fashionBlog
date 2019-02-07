var nav = document.querySelector('nav');
var body = document.querySelector('body');
var header = document.querySelector('header');
var scrollTitle = document.getElementById('scrollTitle');
var scrollArrowHeader = document.getElementById('scrollArrowHeader');

document.addEventListener("DOMContentLoaded", function (event) {

    window.addEventListener('scroll', function () {

        if (window.pageYOffset > 150) {
            scrollTitle.classList.add('scrollDown');
            scrollTitle.classList.remove('scrollUp');
            scrollArrowHeader.classList.add('scrollArrDown');
            scrollArrowHeader.classList.remove('scrollUp');
        } else {
            scrollTitle.classList.remove('scrollDown');
            scrollTitle.classList.add('scrollUp');
            scrollArrowHeader.classList.remove('scrollArrDown');
            scrollArrowHeader.classList.add('scrollUp');
        }
    });

    var firstSub = document.querySelector('.subA');

    firstSub.addEventListener('mouseover', function(){
        console.log("entered");
    });

    console.log(window.innerHeight);

});