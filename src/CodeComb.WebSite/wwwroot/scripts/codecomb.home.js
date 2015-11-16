var current = null;
$(document).ready(function () {
    $('.group-1').hover(function () {
        current = 1;
        $('#hex-1-outer').addClass('active-outer');
        $('#hex-1').addClass('active');
        $('.group-2').addClass('hide');
        $('.group-3').addClass('hide');
        $('.group-4').addClass('hide');
        $('.group-5').addClass('hide');
    }, function () {
        if (current != 1) { 
            $('.hide').removeClass('hide');
            $('.active').removeClass('active');
            $('.active-outer').removeClass('active-outer');
        } else {
            current = null;
        }
    });
    $('.group-2').hover(function () {
        current = 2;
        $('.group-1').addClass('hide');
        $('#hex-2-outer').addClass('active-outer');
        $('#hex-2').addClass('active');
        $('.group-3').addClass('hide');
        $('.group-4').addClass('hide');
        $('.group-5').addClass('hide');
    }, function () {
        if (current != 2) {
            $('.hide').removeClass('hide');
            $('.active').removeClass('active');
            $('.active-outer').removeClass('active-outer');
        } else {
            current = null;
        }
    });
    $('.group-3').hover(function () {
        current = 3;
        $('.group-1').addClass('hide');
        $('.group-2').addClass('hide');
        $('#hex-3-outer').addClass('active-outer');
        $('#hex-3').addClass('active');
        $('.group-4').addClass('hide');
        $('.group-5').addClass('hide');
    }, function () {
        if (current != 3) {
            $('.hide').removeClass('hide');
            $('.active').removeClass('active');
            $('.active-outer').removeClass('active-outer');
        } else {
            current = null;
        }
    });
    $('.group-4').hover(function () {
        current = 4;
        $('.group-1').addClass('hide');
        $('.group-2').addClass('hide');
        $('.group-3').addClass('hide');
        $('#hex-4-outer').addClass('active-outer');
        $('#hex-4').addClass('active');
        $('.group-5').addClass('hide');
    }, function () {
        if (current != 4) {
            $('.hide').removeClass('hide');
            $('.active').removeClass('active');
            $('.active-outer').removeClass('active-outer');
        } else {
            current = null;
        }
    });
    $('.group-5').hover(function () {
        current = 5;
        $('.group-1').addClass('hide');
        $('.group-2').addClass('hide');
        $('.group-3').addClass('hide');
        $('.group-4').addClass('hide');
        $('#hex-5-outer').addClass('active-outer');
        $('#hex-5').addClass('active');
    }, function () {
        if (current != 5) {
            $('.hide').removeClass('hide');
            $('.active').removeClass('active');
            $('.active-outer').removeClass('active-outer');
        } else {
            current = null;
        }
    });
});