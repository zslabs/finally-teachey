(function( $ ) {
  "use strict";

  // Load SVGs
  boomsvgloader.load('./assets/svg/sprite.svg');

  // Override Smooth Scroll behavior
  UIkit.on('beforeready.uk.dom', function() {
    $.extend(UIkit.components.smoothScroll.prototype.defaults, {
      duration: 600,
      offset: 130
    });
  });

  // Gallery
  $('.Gallery').flickity({
    contain: true,
    wrapAround: true,
    freeScroll: true,
    pageDots: false,
    autoPlay: true,
    percentPosition: false,
    imagesLoaded: true
  });

  var timespan = countdown(new Date(), new Date('October 16, 2016 16:00:00'));

  document.querySelector('.Months').innerHTML = timespan.months;
  document.querySelector('.Days').innerHTML = timespan.days;
  document.querySelector('.Hours').innerHTML = timespan.hours;
  document.querySelector('.Minutes').innerHTML = timespan.minutes;
}(jQuery));
