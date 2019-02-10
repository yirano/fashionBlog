var nav = document.querySelector('nav');
var body = document.querySelector('body');
var header = document.querySelector('header');
var scrollTitle = document.getElementById('scrollTitle');
var scrollArrowHeader = document.getElementById('scrollArrowHeader');

document.addEventListener("DOMContentLoaded", function (event) {

    window.addEventListener('scroll', function () {

        if (window.pageYOffset > 100) {
            scrollTitle.classList.add('scrollDown');
            scrollTitle.classList.remove('scrollUp');
            scrollArrowHeader.classList.add('scrollArrDown');
            scrollArrowHeader.classList.remove('scrollUp');
            header.classList.add('fadeHeader');
            header.classList.remove('showHeader');

        } else {
            scrollTitle.classList.remove('scrollDown');
            scrollTitle.classList.add('scrollUp');
            scrollArrowHeader.classList.remove('scrollArrDown');
            scrollArrowHeader.classList.add('scrollUp');
            header.classList.remove('fadeHeader');
            header.classList.add('showHeader');


        }
    });

    var firstSub = document.querySelector('.subA');

    firstSub.addEventListener('mouseover', function(){
        console.log("entered");
    });

    console.log(window.innerHeight);

});