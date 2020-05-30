// Dropdown menu

$(document).ready(function() {
	$('.dropdown').click(function() {
		$('.dropdown-content').slideToggle(300);
		$('div.dropdown').toggleClass('dropdown-background');
		$('span.top').toggleClass('bar1');
		$('span.middle').toggleClass('bar2');
		$('span.bottom').toggleClass('bar3');
	});
});

// show more/less toggle

$(document).ready(function() {
	$('.show-button').click(function() {
		$('.more-content').slideToggle(300);
		$('.elipsis').slideToggle(300);
	    $('span.show-button').toggleClass('show-more').toggleClass('show-less');
	});
});

// throttle for parallax

const throttle = (func, limit) => {

    const background = document.querySelector('.parallax');

	if (background === null) {
	    let lastFunc
	    let lastRan
	    return function() {
	        const context = this
	        const args = arguments
	        if (!lastRan) {
	            func.apply(context, args)
	            lastRan = Date.now()
	        } else {
	            clearTimeout(lastFunc)
	            lastFunc = setTimeout(function() {
	                if ((Date.now() - lastRan) >= limit) {
	                    func.apply(context, args)
	                    lastRan = Date.now()
	                }
	            }, limit - (Date.now() - lastRan))
	        };
	    };
	} else {
		return func;
	};
};

// Parallax effect

const parallaxEffect = (e) => {

	let windowHeight = window.innerHeight * 1.2;
    let scrolled = window.pageYOffset;
	const background = document.querySelector('.parallax');

	if (window.innerHeight <= 250) {
    	windowHeight = window.innerHeight * 5;
    } else if (window.innerHeight <= 500) {
    	windowHeight = window.innerHeight * 4;
    }

    if (background === null || scrolled > windowHeight) {
    	return;
    };

   	background.style.top = (scrolled * 0.25) + 'px';
};
	


window.addEventListener('scroll', throttle(parallaxEffect, 10000));



// Header width function 

const headerWidth = (e) => {
	const header = document.querySelector('.header-background');
	const body = document.querySelector('body');
	if (!header) {
		return;
	};
	const displayWidth = window.innerWidth;
	body.style.width = displayWidth + "px";
}

// window.addEventListener('resize', headerWidth);









