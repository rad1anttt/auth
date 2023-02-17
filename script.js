$(document).ready(function () {
    alert("Версия jQuery " + jQuery.fn.jquery);
});
$(".dws-form").on("click", ".tab", function() {
    $(".dws-form").find(".active").removeClass("active");
    $(this).addClass('active');
    $(".tab-form").eq($(this).index()).addClass("active");
});

