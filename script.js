const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { 
  ham.toggleClass('active'); 
  nav.toggleClass('active'); 
});

$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
  return false;
});
