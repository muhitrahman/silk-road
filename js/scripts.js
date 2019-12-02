/** text slider fadein & fadeout **/
//jQuery(document).ready(function () {
//    (function () {
//        var quotes = $(".quotes");
//        var quoteIndex = -1;
//
//        function showNextQuote() {
//            ++quoteIndex;
//            quotes.eq(quoteIndex % quotes.length)
//                    .fadeIn(2000)
//                    .delay(2000)
//                    .fadeOut(2000, showNextQuote);
//        }
//        showNextQuote();
//    })();
//});

/** nanoScroller **/
jQuery(document).ready(function () {
    jQuery(".nano").nanoScroller({scroll: 'top'});
});

/** business_carusel **/
jQuery(document).ready(function () {
    jQuery('#comapny_carusel').owlCarousel({
        loop: true,
        margin: 10,
        pagination: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
});

/** comapny_carusel **/
jQuery(document).ready(function () {
    jQuery('#comapny_details').owlCarousel({
        loop: true,
        margin: 10,
        pagination: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    });
});


function sendContactRequestAJAX(form) {
    $.ajax({
        type: "POST",
        url: base + "main/sendContactRequest",
        dataType: "JSON",
        data: $(form).serialize(),
        success: function (response) {
            if (response.status == 1) { // success
                $('#sendContactRequest')[0].reset();
                alertMessage('#showResult', 'success', response.message);
            } else { // error
                alertMessage('#showResult', 'danger', response.message);
            }

        }
    });

}

function alertMessage(selector, type, message) {
    $(selector).html(''); // blank previous message
    var getMsg = '<div class="alert alert-' + type + '" role="alert">' + message + '</div>'; // html part
    $(selector).html(getMsg); // finally generate message
    $(selector).show(); // show message
}


