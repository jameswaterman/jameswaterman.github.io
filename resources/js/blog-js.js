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