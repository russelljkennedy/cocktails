// Main site JS
// Fade the return to top link in when scrolled //
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#return-top').fadeIn();
    } else {
        $('#return-top').fadeOut();
    }
});

// Document ready functions //
jQuery(document).ready(function($) {
  var $topLink = $('#return-top a');
  var $navLinks = $('.main-nav a');
  var $ctaLink = $('.hero .btn');
  var $popButton = $('.pop-toggle');
  var $popMenu = $('.pop-inner');

  // Animated anchor links //
  $topLink.click(function(e){
      e.preventDefault();
      var topId = "#" + e.currentTarget.id + "Return";
      $("html, body").animate({
          scrollTop: $(topId).offset().top
      }, 1000)
  });

  $navLinks.click(function(e) {
      e.preventDefault();
      var sectionId = "#section" + e.currentTarget.id;
      $("html, body").animate({
          scrollTop: $(sectionId).offset().top
      }, 1000)
  });

  $ctaLink.click(function(e) {
      e.preventDefault();
      var sectionId = "#section" + e.currentTarget.id;
      $("html, body").animate({
          scrollTop: $(sectionId).offset().top
      }, 1000)
  });

  // Popout nav
  $( '.cross' ).hide();
  $( '.pop-menu' ).hide();
  $( '.hamburger' ).click(function() {
    $( '.pop-menu' ).slideToggle( "slow", function() {
        $( '.hamburger' ).hide();
        $( '.cross' ).show();
    });
  });

  // Hide the menu div when clicking anywhere but on the menu or its children //
  $(document).mouseup(function(e){
    var navmenu = $('.pop-menu');
    var burger = $( '.hamburger' );
    var cross = $( '.cross' );

    if(e.target.id != navmenu.attr('id') && !navmenu.has(e.target).length){
      navmenu.slideUp();
      cross.hide();
      burger.show();
    }
  });

  // Gallery images
  $('.gallery-images').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
    enabled: true
    },
    image: {
    // options for image content type
    titleSrc: 'title'
    }
  });

});
