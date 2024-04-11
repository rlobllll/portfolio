$(window).scroll(function(){
    let winScr = $(window).scrollTop();
    let figurePosi = $('.main .intro .content .figure_box').offset().top;

    if(winScr >= figurePosi - 400){
        $('.main .intro .content .figure_box').addClass('active')
    } else {
        $('.main .intro .content .figure_box').removeClass('active')
    }

})

$('.monitor').mouseenter(function(){
    let imgH = $(this).find('img').height();
    let monitorH = $(this).height();
    $(this).find('img').css({top:-imgH + monitorH})
}).mouseout(function(){
    $(this).find('img').css({top:0})
});


$('.barogagi a').click(function(){
    let aHref = $(this).attr('href');
    let baroTop = $(aHref).offset().top;
    $('html').delay(400).animate({scrollTop:baroTop},2000);
    return false
})