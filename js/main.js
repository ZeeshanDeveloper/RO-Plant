//main
/*mbl-nav*/
$(".mbl-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});
$(".mbl-nav .box").click(function (e) {
    e.stopPropagation();
});
$(".mbl-dot-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});
/*categorie-side*/
/*$(".mbl-category-opener").click(function () {
    $('.mbl-nav .mbl-category').animate({
        height: 'toggle'
    });
    $('.mbl-nav .norm').animate({
        height: 'toggle'
    });
});
$(".mbl-nav .mbl-category .back").click(function () {
    $('.mbl-nav .mbl-category').animate({
        height: 'toggle'
    });
    $('.mbl-nav .norm').animate({
        height: 'toggle'
    });
});*/
