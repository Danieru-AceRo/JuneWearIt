$(document).ready(function(){
	var imgItems = $('.slider2 li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.pagination2').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider2 li').hide(); // Ocultanos todos los slides
	$('.slider2 li:first').show(); // Mostramos el primer slide
	$('.pagination2 li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination2 li').click(pagination);
	$('.right2 span').click(nextSlider);
	$('.left2 span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider2 li').hide(); // Ocultamos todos los slides
		$('.slider2 li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination2 li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination2 li').css({'color': '#858585'});
		$('.pagination2 li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider2 li').hide(); // Ocultamos todos los slides
		$('.slider2 li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination2 li').css({'color': '#858585'});
		$('.pagination2 li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider2 li').hide(); // Ocultamos todos los slides
		$('.slider2 li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});