$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsclass:'dots'
    });
    
    
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });
    
    
    });