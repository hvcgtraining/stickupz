$(document).ready(function () {
    $(".nav__toggler").click(function () {
        $(".nav").toggleClass("active");
    });

    $(".has-dropdown").click(function () {
        $(this).toggleClass("has-dropdown--active");
        $(".dropdown").slideToggle(300);
    });
    $("a[href*='#']").click(function (event) {
        event.preventDefault();
        const hash = this.hash;
        console.log($(hash).offset());
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 600);
        location.hash = hash;
        $(".nav__item").removeClass("active");
        $(this).parent().addClass("active");

    });
    $(".back-to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });
    function onWindowScroll() {
        if ($("html, body").scrollTop() > $(window).height()) {
            $(".back-to-top").fadeIn(100);
        }
        else {
            $(".back-to-top").fadeOut(100);
        }
        let id = "";
        const listSection = $("*[data-scroll-spy='section']");
        const scrollPos = $("html, body").scrollTop();
        for (let section of listSection) {
            const sectionPos = $(section).offset().top;
            if (sectionPos - scrollPos >= 0 && sectionPos - scrollPos < 100) {
                id = $(section).attr("id");
            }
        }
        if (id) {
            $(".nav__item").removeClass("active");
            $("a[href='#" + id + "']").parent().addClass("active");
        }
    }
    onWindowScroll();
    $(window).scroll(onWindowScroll);
    $(".WCU-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dotsEach: true,
        navClass: ["WCU-carousel__prev", "WCU-carousel__next"],
        dotClass: "owl-dot WCU-carousel__dot",
        responsive: {
            768: {
                dots: false
            }
        }
    });
});
$(".language-flag-block").click(function (e) {
    e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
    // Ẩn het toan bo nhung thang khac
    // var navsub = $(this).find(".sibar-menu-sub");

    if ($(this).hasClass('selected') == false) {
        $(".language-flag-block.selected").removeClass('selected')
        $(this).addClass('selected');
    }


})
$(".nav-box1").click(function (e) {
    e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
    // Ẩn het toan bo nhung thang khac
    var navsub = $(this).find(".nav__list");

    if ($(this).hasClass('showed') == false) {
        $(".nav-box1.showed").removeClass('showed').find('.nav__list').slideUp('swing');
        $(this).addClass('showed');
        navsub.slideDown('swing');
    }
    else {
        $(".nav-box1.showed").removeClass('showed').find('.nav__list').slideUp('swing');
    }
})
$('body').click(function (e) {
    $(".nav-box1.showed").removeClass('showed').find('.nav__list').slideUp('swing');
})