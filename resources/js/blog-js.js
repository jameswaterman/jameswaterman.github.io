// dropdown menu


$(document).ready(function() {
	$('.dropdown').click(function() {
		$('.dropdown-content').slideToggle(300);
		if (document.querySelector('.top').classList.contains('grey-background')) {
		    $('div.dropdown').toggleClass('dropdown-background-portfolio');
	    } else {
            $('div.dropdown').toggleClass('dropdown-background');
	    };
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

// const headerWidth = (e) => {
// 	const header = document.querySelector('.header-background');
// 	const body = document.body;
// 	if (!header) {
// 		return;
// 	};
// 	const displayWidth = window.innerWidth;
// 	body.style.width = displayWidth + "px";
// }

// window.addEventListener('resize', headerWidth);

// portfolio toggle 

const portfolioToggle = {
	btnLeft: document.querySelector('.web-title'),

    btnRight: document.querySelector('.photo-title'),

    webHeadLink: document.querySelector('.web-head-title'),

    photoHeadLink: document.querySelector('.photo-head-title'),

    photoBody: document.querySelector('.portfolio-photo-body'),

    webBody: document.querySelector('.portfolio-web-body'),

	showRight: (e) => {
        if (portfolioToggle.btnLeft.classList.contains('current')) {

        	portfolioToggle.btnLeft.classList.remove('current');
        	portfolioToggle.btnRight.classList.add('current');

        	portfolioToggle.webBody.style.display = 'none';
        	portfolioToggle.photoBody.style.display = 'flex';
        };
	},

	showLeft: (e) => {
		if (portfolioToggle.btnRight.classList.contains('current')) {

        	portfolioToggle.btnRight.classList.remove('current');
        	portfolioToggle.btnLeft.classList.add('current');

        	portfolioToggle.webBody.style.display = 'block';
        	portfolioToggle.photoBody.style.display = 'none';
        };
	}
};

portfolioToggle.btnLeft.addEventListener('click', portfolioToggle.showLeft);
portfolioToggle.btnRight.addEventListener('click', portfolioToggle.showRight);

portfolioToggle.webHeadLink.addEventListener('click', portfolioToggle.showLeft);
portfolioToggle.photoHeadLink.addEventListener('click', portfolioToggle.showRight);


// Toggle feature list portfolio

let readMoreBtns = document.querySelectorAll(".show-list");

readMoreBtns.forEach(() => {
  this.addEventListener( 'click' , changeClass);
})

function changeClass(event) {

    let btn = event.target,
        context = event.target.parentNode.parentNode,
        toggleList = context.querySelector(".list"),
        toggleArrow = context.querySelector('.dropdown-arrow')

	if (btn.classList.contains('show-list') || btn.classList.contains('dropdown-arrow')) {
		$(toggleArrow).toggleClass('rotate-arrow');
	    $(toggleList).slideToggle(300);
	}
}










