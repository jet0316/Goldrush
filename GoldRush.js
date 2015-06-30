$(document).ready(function(){

	$('.map-img').on( "click", function(event) {
  		var coordinatesX = event.pageX;
  		var coordinatesY = event.pageY;

  	 	console.log(
    	    "pageX/Y: " +
    	    event.pageX + ", " +
    	    event.pageY
        );

  		$('body').append('<div class="container"><img class="marker" src="https://files.slack.com/files-pri/T068NB2KC-F0701A2LT/marker.png"></div>');
		
		$('.container').last().css({ 'top' : coordinatesY , 'left' : coordinatesX });

	

			$('body').on('click', '.container', function( event ) {
				$(this).remove()
			});
	});
  		
});