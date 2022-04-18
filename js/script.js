$(function(){
    $('.search-btn').click(function(e){
        e.preventDefault();
        $('.searchForm,.input-search').toggleClass('act');
    });
$('.gnb>li').hover(function(){
    $(this).find('.lnb').slideToggle();
});
$('.mobile-nav-box>li').click(function(){
    if($(this).find('fa-solid').hasClass('fa-angle-down')){
        $(this).find('fa-solid').removeClass('fa-angle-down').addClass('fa-angle-up');
    }else{
        $(this).find('fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
    $(this).find('.mobile-lnb').slideToggle();
  })
$('.menu, .xclose').click(function(){
    $('.fadeblack').animate({width:"toggle"},500);
})

    $('.menu').click(function(){
        $('.wrapper').css({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        }).animate({
            left: "-70%"
        }, 500);

        $('.fadeblack').css({
            display: 'block',
            top: 0,
            left: '100%'
        }).animate({
            left: 0
        }, 500)
    });
    $('.xclose').click(function(){
        $('.wrapper').animate({
            left: 0,
            position: 'relative'
        }, 500, function(){
            $('.wrapper').css('position','relative');
        })
        $('fadeblack').animate({
            left: '100%'
        },500,function(){
            $('.fadeblack').css('display', 'none');
        })
    })

    //imgSlider
    $('.imgSlider').hide();
    $('.imgs').click(function(e){
        e.preventDefault(); //a태그 오작동 방지





        $('.imgSlider').slideToggle('slow',function(){
            if($(this).css('display') == 'none'){
                $('.imgs').find('.promotion-icon').removeClass('icon-rotate');
             }else{
                $('.imgs').find('.promotion-icon').addClass('icon-rotate');
             }
        });
    })
  
    $('.notice-slider').slick({
       autoplay: true,
       autoplayspeed: 2000,
       vertical: true,
       arrows: false
    });


});
