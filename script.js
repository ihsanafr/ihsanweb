document.addEventListener("DOMContentLoaded", function () {
    const fadeElement = document.querySelector(".fade-in-element");
    fadeElement.classList.add("fade-in");
    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    const fadeElements = document.querySelectorAll('.fade-in-element');
    
    function checkFade() {
        fadeElements.forEach(fadeElement => {
            const elementTop = fadeElement.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight) {
                fadeElement.classList.add('fade-in');
            }
        });
    }
    
    window.addEventListener('scroll', debounce(checkFade));
    window.addEventListener('resize', debounce(checkFade));
    checkFade();
    