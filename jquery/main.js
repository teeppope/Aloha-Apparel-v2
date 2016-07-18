$(document).ready(function() {

	//Smooth Scroll jQwerery
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 86 //only was able to get smooth scroll working for desktop/tablet :( 
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

	//Slick slider jqwererey
	$('.products-list').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		},
		]
	});

	//Add to cart button
		var cartTotal = 0;
		var addToCart = $('.add-to-cart') 
		var cartCounter = $('.cart-counter');

	
		addToCart.on('click', function(){
				cartTotal++,
				cartCounter.show().text(cartTotal)
			});


	

	//Subscribe elmail allerts
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

	$('.sub-btn').on('click', function(event){
		// event.preventDefault(); <-- Leaving commented out so the default event refreshes the page.
		console.log('Hi, Ive at least been clicked');
		
		var email = $('#email').val();

		if (isEmail(email)) {
			alert('Thanks for subscribing!');
		}else{
			alert('Please enter a valid email address')
			
		}
	})

})
