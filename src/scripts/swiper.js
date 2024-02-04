new Swiper('.swiper', {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    simulateTouch: true,
    slideToClickedSlide: true,

    spaceBetween: 43,

    slidesPerGroup: 1,

    breakpoints:{
        600:{
            slidesPerView: 2,
        }
    }
})
