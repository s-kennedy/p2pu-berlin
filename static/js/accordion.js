(function($) {
  console.log("accordion.js")
  $(document).ready(function() {
    console.log("document ready")
    $('.accordion-item .heading').on('click', function(e) {
      console.log("clicked!")
      e.preventDefault();
      $(this).closest('.accordion-item').toggleClass('open');
    })
  })
}(jQuery))
