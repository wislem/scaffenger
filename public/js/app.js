if (typeof RedactorPlugins === 'undefined') window.RedactorPlugins = {};

$(function()
{
  // Initialize Image Lightbox
  $('[data-toggle="lightbox-image"]').magnificPopup({type: 'image', image: {titleSrc: 'title'}});

  // Initialize image gallery lightbox
  $('[data-toggle="lightbox-gallery"]').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      arrowMarkup: '<button type="button" class="mfp-arrow mfp-arrow-%dir%" title="%title%"></button>',
      tPrev: 'Previous',
      tNext: 'Next',
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
    },
    image: {titleSrc: 'title'}
  });

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  /* swap open/close side menu icons */
  $('.toggle-submenu').click(function(e){
    e.preventDefault();
    // toggle icon
    $(this).toggleClass('open');
  });

  $(".delete").click(function(e) {
    var location = $(this).attr('href');
    bootbox.confirm("Are you sure you want to delete this entry?", function(confirmed) {
      if(confirmed) {
        window.location.replace(location);
      }
    });
    return false;
  });
});
