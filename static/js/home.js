
$(document).ready(function() {
  $( document ).mousemove( function( e ) {
    $( '.mouse-parallax' ).parallax( -30, e );
  });
});