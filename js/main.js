// Swiper Slide
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        }
    }
});
// Fixed Nav Onscroll
$(window).on("scroll",function(){
	if($(window).scrollTop()) {
	  $('.navbar').addClass('fixed-nav');
	}

	else{
	  $('.navbar').removeClass('fixed-nav');
	}
});