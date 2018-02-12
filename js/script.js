$('.open-overlay').click(function() {
  var overlay_navigation = $('.overlay-navigation');
  
  overlay_navigation.addClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {
    overlayOpen();
  } else {
    overlayClose();
  }
});
$('nav ul li').click(function() {
  overlayClose();
});
function overlayOpen() {
  var overlay_navigation = $('.overlay-navigation');
  overlay_navigation.velocity('transition.slideLeftIn', {
    duration: 50,
    delay: 0,
    begin: function() {
      $('nav ul li').velocity('transition.perspectiveLeftIn', {
        stagger: 50,
        delay: 0,
        complete: function() {
          $('nav ul li a').velocity({
            opacity: [1, 0],
          }, {
            delay: 1,
            duration: 40
          });
          $('.open-overlay').css('pointer-events', 'auto');
        }
      });
    }
  });
}

function overlayClose() {
  var overlay_navigation = $('.overlay-navigation');
  $('nav ul li').velocity('transition.perspectiveRightOut', {
    stagger: 50,
    delay: 0,
    complete: function() {
      overlay_navigation.velocity('transition.fadeOut', {
        delay: 0,
        duration: 50,
        complete: function() {
          $('nav ul li a').velocity({
            opacity: [0, 1],
          }, {
            delay: 0,
            duration: 50
          });
          $('.open-overlay').css('pointer-events', 'auto');
          overlay_navigation.removeClass('overlay-active');
        }
      });
    }
  });
}