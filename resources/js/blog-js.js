// dropdown menu  ////////////////////////////////////////


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

// Inserted html /////////////////////////////////////////////////


  //favicon 

  const favicon = `    
    <link rel="apple-touch-icon" sizes="180x180" href="./resources/images/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./resources/images/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./resources/images/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="./resources/images/favicon_io/site.webmanifest">`

  const faviconPortfolio = `    
    <link rel="apple-touch-icon" sizes="180x180" href="../resources/images/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../resources/images/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../resources/images/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="../resources/images/favicon_io/site.webmanifest">`

  const faviconBlog = `    
    <link rel="apple-touch-icon" sizes="180x180" href="../../resources/images/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../resources/images/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../resources/images/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="../../resources/images/favicon_io/site.webmanifest">`

const head = document.getElementById("head");
const headPortfolio = document.getElementById("headPortfolio");
const headBlog = document.getElementById("headBlog");

if(head){
    head.innerHTML += favicon;
} else if (headPortfolio) {
    headPortfolio.innerHTML += faviconPortfolio;
} else if(headBlog) {
    headBlog.innerHTML += faviconBlog;
};

  // footers

const copyright = `<p class="center copyright">&copy; James Waterman, ` + new Date().getFullYear() + `</p>`

const mainPageFooter = `
        <div class="footerlinks">
            <a href="index.html" class="footerlink">Home</a>
            <a href="about-me.html" class="footerlink">About Me</a>
            <a href="contact-me.html" class="footerlink">Contact Me</a>
            <a href="portfolio.html" class="footerlink">Portfolio</a>
            <a href="https://www.instagram.com/james_waterman6/" target="_blank" class="footerlink insta">Instagram</a>
        </div>

        ` + copyright;

const articleFooter = `
        <div class="footerlinks">
            <a href="../../index.html" class="footerlink">Home</a>
            <a href="../../about-me.html" class="footerlink">About Me</a>
            <a href="../../contact-me.html" class="footerlink">Contact Me</a>
            <a href="../../portfolio.html" class="footerlink">Portfolio</a>
            <a href="https://www.instagram.com/james_waterman6/" target="_blank" class="footerlink insta">Instagram</a>
        </div>

        ` + copyright;
        
const portfolioPageFooter = `
        <div class="footerlinks">
            <a href="../index.html" class="footerlink">Home</a>
            <a href="../about-me.html" class="footerlink">About Me</a>
            <a href="../contact-me.html" class="footerlink">Contact Me</a>
            <a href="../portfolio.html" class="footerlink">Portfolio</a>
            <a href="https://www.instagram.com/james_waterman6/" target="_blank" class="footerlink insta">Instagram</a>
        </div>

        ` + copyright;

const footer = document.getElementById("footer");
const blogFooter = document.getElementById("blogFooter");
const portfolioFooter = document.getElementById("portfolioFooter");

if(footer){
	footer.innerHTML += mainPageFooter;
} else if (blogFooter){
    blogFooter.innerHTML += articleFooter;
} else if (portfolioFooter){
	portfolioFooter.innerHTML += portfolioPageFooter;
};

//navigation 

const blogNavHtml = `        
            <div class="header-links">
            
            <div class="name-top">
                <h1 class="main-title title-font"><a href="../../index.html">James Waterman</a></h1>

                <h2 class="main-sub-heading title-font web-sub-heading"><a href="../../index.html">Travel | Photo | Web</a></h2>

                <h2 class="main-sub-heading title-font mobile-sub-heading"><a href="../../index.html">Blog</a> | <a href="../../portfolio.html">Portfolio</a></h2>
            </div>
            
            <nav class="link-position">
                <a href="../../index.html" class="nav-link title-font">Home</a>
                <a href="../../about-me.html" class="nav-link title-font">About Me</a>
                <a href="../../contact-me.html" class="nav-link title-font">Contact Me</a>
                <a href="../../portfolio.html" class="nav-link title-font">Portfolio</a>
                <a href="https://www.instagram.com/james_waterman6/" target="_blank" class="nav-link title-font">
                    <img src="../../resources/images/insta-link.png" alt="Instagram Logo">
                </a>
            </nav>
                        

                        <!-- Dropdown menu -->

            <div class="dropdown">
                <div class="hamburger">
                    <span class="top"></span>
                    <span class="middle"></span>
                    <span class="bottom"></span>
                </div>
                <div class="dropdown-content">
                    <nav>
                        <a href="../../index.html">Home</a>
                        <a href="../../about-me.html">About Me</a>
                        <a href="../../contact-me.html">Contact Me</a>
                        <a href="../../portfolio.html">Portfolio</a>
                        <a href="https://www.instagram.com/james_waterman6/" target="_blank">Instagram</a>
                    </nav>
                </div>
            </div>

        </div>`;

const PortfolioNavHtml = `
            <div class="header-links">

            <div class="name-top">
                <h1 class="main-title title-font"><a href="../index.html">James Waterman</a></h1>

                <h2 class="main-sub-heading title-font web-sub-heading"><a href="../index.html">Travel | Photo | Web</a></h2>

                <h2 class="main-sub-heading title-font mobile-sub-heading"><a href="../index.html">Blog</a> | <a href="../portfolio.html">Portfolio</a></h2>
            </div>

            <nav class="link-position">
                <a href="../index.html" class="nav-link title-font">Home</a>
                <a href="../about-me.html" class="nav-link title-font">About Me</a>
                <a href="../contact-me.html" class="nav-link title-font">Contact Me</a>
                <a href="../portfolio.html" class="nav-link title-font">Portfolio</a>
                <a href="https://www.instagram.com/james_waterman6/" target="_blank" class="nav-link title-font">
                    <img src="../resources/images/insta-link.png" alt="Instagram Logo">
                </a>
            </nav>
                        

                        <!-- Dropdown menu -->

            <div class="dropdown">
                <div class="hamburger">
                    <span class="top"></span>
                    <span class="middle"></span>
                    <span class="bottom"></span>
                </div>
                <div class="dropdown-content">
                    <nav>
                        <a href="../index.html">Home</a>
                        <a href="../about-me.html">About Me</a>
                        <a href="../contact-me.html">Contact Me</a>
                        <a href="../portfolio.html">Portfolio</a>
                        <a href="https://www.instagram.com/james_waterman6/" target="_blank">Instagram</a>
                    </nav>
                </div>
            </div>

        </div>`;

const blogNav = document.getElementById("blogNav");
const portfolioNav = document.getElementById("portfolioNav")

if(blogNav){
	blogNav.innerHTML += blogNavHtml;
} else if(portfolioNav){
	portfolioNav.innerHTML += PortfolioNavHtml;
};





// show more/less toggle //////////////////////////////////

$(document).ready(function() {
	$('.show-button').click(function() {
		$('.more-content').slideToggle(300);
		$('.elipsis').slideToggle(300);
	    $('span.show-button').toggleClass('show-more').toggleClass('show-less');
	});
});

// throttle for parallax  //////////////////////////////////

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

// portfolio toggle //////////////////////////////////////

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


if(document.getElementById("portfolioSwitch")) {
    portfolioToggle.btnLeft.addEventListener('click', portfolioToggle.showLeft);
    portfolioToggle.btnRight.addEventListener('click', portfolioToggle.showRight);

    portfolioToggle.webHeadLink.addEventListener('click', portfolioToggle.showLeft);
    portfolioToggle.photoHeadLink.addEventListener('click', portfolioToggle.showRight);
}


// Toggle feature list portfolio  //////////////////////////////////////////////////////

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











