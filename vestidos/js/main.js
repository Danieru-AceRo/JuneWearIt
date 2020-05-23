$(document).ready(function(){
	var imgItems = $('.slider1 li').length; // Numero de Slides
	var imgPos = 1;

	$('.slider1 li').hide(); // Ocultanos todos los slides
	$('.slider1 li:first').show(); // Mostramos el primer slide

	// Ejecutamos todas las funciones
	$('.right1 span').click(nextSlider);
	$('.left1 span').click(prevSlider);


	// FUNCIONES =========================================================

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider1 li').hide(); // Ocultamos todos los slides
		$('.slider1 li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos1 +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});
$(document).ready(function(){
	var imgItems = $('.slider2 li').length; 
	var imgPos = 1;

	$('.slider2 li').hide(); 
	$('.slider2 li:first').show(); 

	$('.right2 span').click(nextSlider);
	$('.left2 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider2 li').hide(); 
		$('.slider2 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider2 li').hide(); 
		$('.slider2 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider3 li').length; 
	var imgPos = 1;

	$('.slider3 li').hide(); 
	$('.slider3 li:first').show(); 

	$('.right3 span').click(nextSlider);
	$('.left3 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider3 li').hide(); 
		$('.slider3 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider3 li').hide(); 
		$('.slider3 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider4 li').length; 
	var imgPos = 1;

	$('.slider4 li').hide(); 
	$('.slider4 li:first').show(); 

	$('.right4 span').click(nextSlider);
	$('.left4 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider4 li').hide(); 
		$('.slider4 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider4 li').hide(); 
		$('.slider4 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider5 li').length; 
	var imgPos = 1;

	$('.slider5 li').hide(); 
	$('.slider5 li:first').show(); 

	$('.right5 span').click(nextSlider);
	$('.left5 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider5 li').hide(); 
		$('.slider5 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider5 li').hide(); 
		$('.slider5 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider15 li').length; 
	var imgPos = 1;

	$('.slider15 li').hide(); 
	$('.slider15 li:first').show(); 

	$('.right15 span').click(nextSlider);
	$('.left15 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider15 li').hide(); 
		$('.slider15 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider15 li').hide(); 
		$('.slider15 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider6 li').length; 
	var imgPos = 1;

	$('.slider6 li').hide(); 
	$('.slider6 li:first').show(); 

	$('.right6 span').click(nextSlider);
	$('.left6 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider6 li').hide(); 
		$('.slider6 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider6 li').hide(); 
		$('.slider6 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider7 li').length; 
	var imgPos = 1;

	$('.slider7 li').hide(); 
	$('.slider7 li:first').show(); 

	$('.right7 span').click(nextSlider);
	$('.left7 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider7 li').hide(); 
		$('.slider7 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider7 li').hide(); 
		$('.slider7 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider8 li').length; 
	var imgPos = 1;

	$('.slider8 li').hide(); 
	$('.slider8 li:first').show(); 

	$('.right8 span').click(nextSlider);
	$('.left8 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider8 li').hide(); 
		$('.slider8 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider8 li').hide(); 
		$('.slider8 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider9 li').length; 
	var imgPos = 1;

	$('.slider9 li').hide(); 
	$('.slider9 li:first').show(); 

	$('.right9 span').click(nextSlider);
	$('.left9 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider9 li').hide(); 
		$('.slider9 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider9 li').hide(); 
		$('.slider9 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider10 li').length; 
	var imgPos = 1;

	$('.slider10 li').hide(); 
	$('.slider10 li:first').show(); 

	$('.right10 span').click(nextSlider);
	$('.left10 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider10 li').hide(); 
		$('.slider10 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider10 li').hide(); 
		$('.slider10 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider11 li').length; 
	var imgPos = 1;

	$('.slider11 li').hide(); 
	$('.slider11 li:first').show(); 

	$('.right11 span').click(nextSlider);
	$('.left11 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider11 li').hide(); 
		$('.slider11 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider11 li').hide(); 
		$('.slider11 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider12 li').length; 
	var imgPos = 1;

	$('.slider12 li').hide(); 
	$('.slider12 li:first').show(); 

	$('.right12 span').click(nextSlider);
	$('.left12 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider12 li').hide(); 
		$('.slider12 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider12 li').hide(); 
		$('.slider12 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider13 li').length; 
	var imgPos = 1;

	$('.slider13 li').hide(); 
	$('.slider13 li:first').show(); 

	$('.right13 span').click(nextSlider);
	$('.left13 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider13 li').hide(); 
		$('.slider13 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider13 li').hide(); 
		$('.slider13 li:nth-child('+ imgPos +')').fadeIn();
	}
});

$(document).ready(function(){
	var imgItems = $('.slider14 li').length; 
	var imgPos = 1;

	$('.slider14 li').hide(); 
	$('.slider14 li:first').show(); 

	$('.right14 span').click(nextSlider);
	$('.left14 span').click(prevSlider);

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}


		$('.slider14 li').hide(); 
		$('.slider14 li:nth-child('+ imgPos +')').fadeIn(); 

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider14 li').hide(); 
		$('.slider14 li:nth-child('+ imgPos +')').fadeIn();
	}
});