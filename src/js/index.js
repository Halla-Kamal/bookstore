
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'animate.css';
import 'wowjs/dist/wow.min.js';
import '@fortawesome/fontawesome-free/js/all.min.js';
// import 'owl.carousel/dist/owl.carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../sass/main.scss';

$(function () {
    // tooltip-cart-icon
    $('[data-toggle="tooltip"]').tooltip();

    // scroll
    $("a.scroll").on('click', function (event) {

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 0
        }, 800, function () {});

    });

    // add-to-cart-alert
    $('.add-alert').on("click", function () {
        alert('تمت إضافة الكتاب إلى عربة الشراء بنجاح.');
    });
});

// copyright date update
var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year;