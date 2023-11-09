const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100 / 375) * (0.1 * $(window).width()) * rem;
    }
};

window.addEventListener('resize', () => {
    resizeAbilitiesSwiper();
    resizeClientsSwiper();
    resizeTalentsSwiper();
});
window.addEventListener('load', () => {
    resizeAbilitiesSwiper();
    resizeClientsSwiper();
    resizeTalentsSwiper();
});

//industry-swiper main page
new Swiper('.home__industry-swiper', {
    loop: true,
    speed: 1200,
    direction: 'horizontal',
    slidesPerView: 1.3,
    spaceBetween: rem(0.8),
    grabCursor: true,
    navigation: {
        nextEl: '.home__industry-swiper-button-next'
    },
    breakpoints: {
        768: {
            direction: 'vertical',
            spaceBetween: rem(1.2),
            slidesPerView: 3
        }
    }
});

//abilities-swiper main page
let abilitiesSwiper = null,
    abilitiesSwiperWrapper = document.querySelector('.abilities-swiper-wrapper');

function resizeAbilitiesSwiper() {
    if (window.innerWidth <= 768) {
        abilitiesSwiperWrapper.classList.remove('home__businesses-needs-abilities-list');
        if (!abilitiesSwiper) {
            abilitiesSwiper = new Swiper('.abilities-swiper', {
                loop: true,
                speed: 1200,
                direction: 'horizontal',
                slidesPerView: 'auto',
                spaceBetween: rem(0.8)
            });
        }
    }
    if (window.innerWidth > 768) {
        if (abilitiesSwiper) {
            abilitiesSwiperWrapper.classList.add('home__businesses-needs-abilities-list');
            abilitiesSwiper.destroy();
            abilitiesSwiper = null;
        }
    }
}

//clients-swiper main page
let clientsSwiper = null,
    clientsSwiperWrapper = document.querySelector('.clients-swiper-wrapper');

function resizeClientsSwiper() {
    if (window.innerWidth <= 768) {
        clientsSwiperWrapper.classList.remove('home__clients-list');
        if (!clientsSwiper) {
            clientsSwiper = new Swiper('.clients-swiper', {
                loop: true,
                speed: 1200,
                direction: 'horizontal',
                slidesPerView: 'auto',
                spaceBetween: rem(0.8)
            });
        }
    }
    if (window.innerWidth > 768) {
        if (clientsSwiper) {
            clientsSwiperWrapper.classList.add('home__clients-list');
            clientsSwiper.destroy();
            clientsSwiper = null;
        }
    }
}

//protection-swiper main page
new Swiper('.home__protection-swiper', {
    loop: true,
    speed: 1200,
    grabCursor: true,
    spaceBetween: rem(2),
    navigation: {
        nextEl: '.home__protection-swiper-button-next',
        prevEl: '.home__protection-swiper-button-prev'
    }
});

//tu-letters-swiper main page

new Swiper('.home__tu-letters-swiper', {
    loop: true,
    speed: 1200,
    grabCursor: true,
    spaceBetween: rem(1.2),
    slidesPerView: 1.2,
    navigation: {
        nextEl: '.home__tu-letters-swiper-button-next',
        prevEl: '.home__tu-letters-swiper-button-prev'
    },
    breakpoints: {
        768: {
            spaceBetween: rem(1.6),
            slidesPerView: 3
        }
    }
});

//talents-swiper main page
let talentsSwiper = null,
    talentsSwiperWrapper = document.querySelector('.talents-swiper-wrapper');

function resizeTalentsSwiper() {
    if (window.innerWidth <= 768) {
        talentsSwiperWrapper.classList.remove('home__talents-swiper-wrapper');
        if (!talentsSwiper) {
            talentsSwiper = new Swiper('.talents-swiper', {
                loop: true,
                speed: 1200,
                direction: 'horizontal',
                slidesPerView: 1.2,
                spaceBetween: rem(0.8)
            });
        }
    }
    if (window.innerWidth > 768) {
        if (talentsSwiper) {
            talentsSwiperWrapper.classList.add('home__talents-swiper-wrapper');
            talentsSwiper.destroy();
            talentsSwiper = null;
        }
    }
}

//individual-calc-swiper main page
new Swiper('.home__individual-calc-swiper', {
    loop: true,
    speed: 1200,
    grabCursor: true,
    spaceBetween: rem(0.8),
    slidesPerView: 'auto',

    breakpoints: {
        768: {
            spaceBetween: rem(1.6),
            slidesPerView: 2
        }
    }
});

//home__category-list-swiper
new Swiper('.home__category-list-swiper', {
    loop: true,
    speed: 1200,
    grabCursor: true,
    spaceBetween: rem(0.8),
    slidesPerView: 'auto',

    breakpoints: {
        768: {
            spaceBetween: rem(1.2)
        }
    }
});
