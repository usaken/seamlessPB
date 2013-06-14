$(document).ready(function(){
	var resize = function(){
		var windowWidth = parseInt( $(window).width(), 10 );
		var windowHeight = parseInt( $(window).height(), 10 );
		$( '#gmap' ).css({
							'width' : '100%',
							'height' : '100%'
						});
	};
	resize();
	$( window ).resize( function(){
		resize();
	});
});
