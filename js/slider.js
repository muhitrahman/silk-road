
var allowSlideChange = true;
var slideID = 0;
var promise;
jQuery(document).ready(function () {
    setTimeout(function () {
        triggerAutoplay();
    }, 8000);
});

function changeSlide(direction) {
    if (allowSlideChange) {
        allowSlideChange = false;
        if (direction == 'next') {
            if (++slideID == totalBanner)
                slideID = 0;
        } else {
            if (--slideID == -1)
                slideID = totalBanner - 1;
        }
        changeSlideText(slideID);
        // removed active
        $('#banner-media li').removeClass('active');
        $('#media' + slideID).addClass('active');
        setTimeout(function () {
            allowSlideChange = true;
        }, 802);

        triggerAutoplay();
    }
}

function changeSlideText(slideID) {
    $('.banner-text').hide();
    $('#sliderText' + slideID).show();
}

function triggerAutoplay() {
    clearInterval(promise);
    promise = setInterval(function () {
        changeSlide('next');
    }, 8000);
}


