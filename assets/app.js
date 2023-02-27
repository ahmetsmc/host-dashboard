$(document).ready(function () {
    var body = $("body");

    $(".app-menu .menu aside > ul > li").each(function () {
        if ($(this).find('ul').length > 0) {
            $(this).addClass('has-sup');
            $(this).append(`<i class="fas fa-chevron-down open"></i>`);
        }
    })

    $(".app-menu .menu aside > ul > li.has-sup .open").click(function () {
        $(this).parent().toggleClass('active');
    })

    $(window).ready(function () {
        body.addClass('loaded').removeClass('loading');
    })

    setAppClass();

    $(window).resize(function (){
        setAppClass();
    })
})

function setAppClass(){
    if ($(window).width() <= 992){
        $("main.app").addClass('mini-sidebar');
    }
    else{
        if (!$("main.app").hasClass('must-mini-sidebar')){
            $("main.app").removeClass('mini-sidebar');
        }
    }
}
