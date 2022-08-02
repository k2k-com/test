$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        speed: 900,
    });
    $('.contact-slider__inner').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 10,
    });

    $('.article-slider-box').slick({
        arrows: true,
        PrevArrows: '<button class="article-slider-box__arrow article-slider-box__prev" type="button"><img src="images/icons/prev.svg" alt="prev"></button>',
        NextArrows: '<button class="article-slider-box__arrow article-slider-box__next" type="button"><img src="images/icons/next.svg" alt="next"></button>'

    });


    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
    });
});