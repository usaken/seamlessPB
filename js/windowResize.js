$(document).ready(function(){
	var resize = function(){
		var windowWidth = parseInt( $(window).width(), 10 );
		var windowHeight = parseInt( $(window).height(), 10 );
		//var menuHeight = 100;
		$( '#gmap' ).css({
							'width' : '100%',
							'height' : '100%'
						});
		/*
		if ( windowWidth + windowHeight <= 1000 ) {
			$( 'img' ).css({ 'width' : '31px', 'height' : '31px', 'margin-right' : '15px' });
			$( 'li.buttons' ).css({ 'clear' : 'both', 'padding-top' : '20px' });
		} else {
			$( 'img' ).css({ 'width' : '62px', 'height' : '62px' });
		}
		*/
	};
	resize();
	$( window ).resize( function(){
		resize();
	});
});
