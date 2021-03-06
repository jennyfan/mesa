$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();

	  // Fade in on scroll
    $("section").each(function() {
      var objectTop = $(this).offset().top + 100;
      
      if (objectTop < windowBottom) { // scrolling down
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { // scrolling up
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });

  }).scroll(); //invoke scroll-handler on page-load
});

// Smooth scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});