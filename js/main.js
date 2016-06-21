// Sidebar Fixed offset onScroll
$('.sidebar').affix({
      offset: {
        top: 245 // changes after scrollPosition
      }
});

var $body   = $(document.body);
var navHeight = $('.panel--header').outerHeight(true) + 10;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});
$('#mainCol').removeClass('selected');
    $(this).addClass('selected')
;

// :active Sidebar Nav
$('li a').click(function(e) {
    e.preventDefault();
    $('a').removeClass('active');
    $(this).addClass('active');
});

