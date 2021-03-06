var nav = document.querySelector('nav');
var body = document.querySelector('body');
var header = document.querySelector('header');
var scrollTitle = document.getElementById('scrollTitle');
var scrollArrowHeader = document.getElementById('scrollArrowHeader');
var rightBar = document.querySelector('.rightBar');
var leftBar = document.querySelector('.leftBar');

document.addEventListener("DOMContentLoaded", function (event) {

        console.log(location.href);
        console.log(document.URL);

    window.addEventListener('scroll', function () {

        if (document.URL.contains == "blog.html") {
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
    
            if (window.pageYOffset > 270) {
                rightBar.classList.remove('rightBarHide');
                rightBar.classList.add('rightBarShow');
    
                leftBar.classList.remove('leftBarHide');
                leftBar.classList.add('leftBarShow');
    
            } else {
                rightBar.classList.add('rightBarHide');
                rightBar.classList.remove('rightBarShow');
    
                leftBar.classList.add('leftBarHide');
                leftBar.classList.remove('leftBarShow');
            }
        } else {
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
    
            if (window.pageYOffset > 1270) {
                rightBar.classList.remove('rightBarHide');
                rightBar.classList.add('rightBarShow');
    
                leftBar.classList.remove('leftBarHide');
                leftBar.classList.add('leftBarShow');
    
            } else {
                rightBar.classList.add('rightBarHide');
                rightBar.classList.remove('rightBarShow');
    
                leftBar.classList.add('leftBarHide');
                leftBar.classList.remove('leftBarShow');
            }
        }
    
    });



});

function pageAnim() {
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

    if (window.pageYOffset > 1270) {
        rightBar.classList.remove('rightBarHide');
        rightBar.classList.add('rightBarShow');

        leftBar.classList.remove('leftBarHide');
        leftBar.classList.add('leftBarShow');

    } else {
        rightBar.classList.add('rightBarHide');
        rightBar.classList.remove('rightBarShow');

        leftBar.classList.add('leftBarHide');
        leftBar.classList.remove('leftBarShow');
    }
}
    