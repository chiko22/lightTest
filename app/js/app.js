
$(function () {

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn-active');
        $('.menu__list').toggleClass('menu__list-active');
    });

    $('.menu__list-link').on('click', function () {
        $('.menu__btn').removeClass('menu__btn-active');
        $('.menu__list').removeClass('menu__list-active');
    });

    $("#openToast").toggleClass("hide view");

    $('a.exit--toast').click(function () {
        $("#openToast").fadeOut(250, 0);
    });

});