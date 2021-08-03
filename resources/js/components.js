// Header component


const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

    <!-- Head -->

    <link href="./resources/css/reset.css" type="text/css" rel="stylesheet">

    <link href="./resources/css/header-footer.css" type="text/css" rel="stylesheet">
    
    <header class="header header-home">
        <div class="header-links">
            
            <div class="name-top">
                <h1 class="main-title title-font"><a href="index.html">James Waterman</a></h1>

                <h2 class="main-sub-heading title-font web-sub-heading"><a href="index.html">Travel | Photo | Web</a></h2>

                <h2 class="main-sub-heading title-font mobile-sub-heading"><a href="index.html">Blog</a> | <a href="portfolio.html">Portfolio</a></h2>
            </div>

            <nav class="link-position">
                <a href="index.html" class="nav-link title-font">Home</a>
                <a href="about-me.html" class="nav-link title-font">About Me</a>
                <a href="contact-me.html" class="current-page nav-link title-font">Contact Me</a>
                <a href="portfolio.html" class="nav-link title-font">Portfolio</a>
                <a href="https://www.instagram.com/james_waterman6/" target="_blank" class="nav-link title-font">
                    <img src="./resources/images/insta-link.png">
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
                        <a href="index.html">Home</a>
                        <a href="about-me.html">About Me</a>
                        <a href="contact-me.html">Contact Me</a>
                        <a href="portfolio.html">Portfolio</a>
                        <a href="https://www.instagram.com/james_waterman6/" target="_blank">Instagram</a>
                    </nav>
                </div>
            </div>

        </div>

    </header>

        <script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
    <script type="text/javascript" src="./resources/js/blog-js.js"></script>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);





// Footer component




const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

    <!-- Head -->

    <link href="./resources/css/reset.css" type="text/css" rel="stylesheet">

    <link href="./resources/css/header-footer.css" type="text/css" rel="stylesheet">

<footer class="footer">
        <div class="footerlinks">
            <a href="index.html" class="footerlink">Home</a>
            <a href="about-me.html" class="footerlink">About Me</a>
            <a href="contact-me.html" class="footerlink">Contact Me</a>
            <a href="portfolio.html" class="footerlink">Portfolio</a>
            <a href="https://www.instagram.com/james_waterman6/" target="_blank" class="footerlink insta">Instagram</a>
        </div>

        <p class="center copyright">&copy; James Waterman, 2021</p> 
    </footer>
`

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}
 
customElements.define('footer-component', Footer);