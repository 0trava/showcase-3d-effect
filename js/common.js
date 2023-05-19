document.addEventListener('DOMContentLoaded', function() {

	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800

	})


	document.querySelector('video').playbackRate = 2 // Пришвидшуємо роботу відео в 2 рази 
	

})
