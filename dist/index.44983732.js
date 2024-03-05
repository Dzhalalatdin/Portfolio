$(function() {
    const worksSlider = $('[data-slider="slick"]');
    // Filter
    let filter = $("[data-filter]");
    filter.on("click", function(event) {
        event.preventDefault();
        let cat = $(this).data("filter");
        if (cat == "all") $("[data-cat]").removeClass("hide");
        else $("[data-cat]").each(function() {
            let workCat = $(this).data("cat");
            if (workCat != cat) $(this).addClass("hide");
            else $(this).removeClass("hide");
        });
    });
    // Modal
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    modalCall.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalId1 = $this.data("modal");
        $(modalId1).addClass("show");
        $("body").addClass("no-scroll");
        setTimeout(function() {
            $(modalId1).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });
        }, 200);
        worksSlider.slick("setPosition");
    });
    modalClose.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");
        $(modalId).find(".modal__dialog").css({
            transform: "rotateX(0deg)"
        });
        setTimeout(function() {
            modalParent.removeClass("show");
            $("body").removeClass("no-scroll");
        }, 200);
    });
    $(".modal").on("click", function(event) {
        let $this = $(this);
        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });
        setTimeout(function() {
            $this.removeClass("show");
            $("body").removeClass("no-scroll");
        }, 200);
    });
    $(".modal__content").on("click", function(event) {
        event.stopPropagation();
    });
    $(".modal-work").on("click", function(event) {
        event.stopPropagation();
    });
    $(".contact").on("click", function(event) {
        event.stopPropagation();
    });
    // Slider https://kenwheeler.github.io/slick/
    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    $(".slickPrev").on("click", function(event) {
        event.preventDefault();
        let currentSlider = $(this).parents(".modal").find("slickPrev");
        $("worksSlider").slick('[data-slider="slick"]');
    });
    $(".slickNext").on("click", function(event) {
        event.preventDefault();
        let currentSlider = $(this).parents(".modal").find("slickPrev");
        currentSlider.slick("slickNext");
    });
    // Mobile nav
    const navToggle = $("#navToggle");
    const nav = $("#nav");
    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });
});

//# sourceMappingURL=index.44983732.js.map
