$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {
    $('figcaption').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + window.innerHeight;
      /* If the object is completely visible in the window, fade it it */
      if(bottom_of_window > bottom_of_object) {
        $(this).animate({ 'opacity':'1' }, 500);
      }
    }); 
  });
});