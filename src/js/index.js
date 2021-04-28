import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import '../sass/main.scss';
import '@fortawesome/fontawesome-free/js/all.min.js';

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