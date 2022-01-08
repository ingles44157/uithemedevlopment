$(document).ready(function() {
    $('.demo').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        touchThreshold: 1000,
    });
});

$(document).ready(function() {
    $('.demo1').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        touchThreshold: 1000,
        arrows: false,
    });
});

/*
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $(".header_overlay").addClass("active_header");
        $(".nav-link").addClass("nav-linkScroll");
        $(".fa-search").addClass("fa-search_scroll");
        $('.Logo').attr('src', 'images/URCblack-logo.png')
        $('.langIcon').attr('src', 'images/langIconV.png')
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header_overlay").removeClass("active_header");
        $(".nav-link").removeClass("nav-linkScroll");
        $(".fa-search").removeClass("fa-search_scroll");
        $('.Logo').attr('src', 'images/URC-logo.png')
        $('.langIcon').attr('src', 'images/langIcon.png')
    }
});
*/


$('.searchingSlot_popup_trigger').click(function() {
    $(".searchingSlot").addClass("searching_effect");
});

$('.popup_close_trigger').click(function() {
    $(".searchingSlot").removeClass("searching_effect");
});

function showDivOne() {
    document.getElementById('Sheikha').style.display = "block";
    document.getElementById('learnSlotOne').style.display = "none";
}

function closeDivOne() {
    document.getElementById('Sheikha').style.display = "none";
    document.getElementById('learnSlotOne').style.display = "block";
}

function showDiv() {
    document.getElementById('Tariq').style.display = "block";
    document.getElementById('learnSlotSec').style.display = "none";
}

function closeDiv() {
    document.getElementById('Tariq').style.display = "none";
    document.getElementById('learnSlotSec').style.display = "block";
}

function showoffice() {
    document.getElementById('officetype').style.display = "block";
    document.getElementById('officedepm').style.display = "block";
    document.getElementById('officeposition').style.display = "block";
}

function hideoffice() {
    document.getElementById('officetype').style.display = "none";
    document.getElementById('officedepm').style.display = "none";
    document.getElementById('officeposition').style.display = "none";
}

var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);