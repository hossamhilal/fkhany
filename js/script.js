$(document).ready(function() {

    // CLIENT SLIDER

    $("#owl-one-slide").owlCarousel({
        navigation : true,
        autoPlay: 4000,
        slideSpeed : 500,
        paginationSpeed : 500,
        singleItem:true
    });


    // GO TO TOP
    
    $('.go-top-btn').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 2000);
        return false;
    });
    
    
    // ANIMATION

    Animate_box();
    $(document).scroll(function (){
        Animate_box();
    });

    function Animate_box() {
        var scroll_var = $(this).scrollTop();

        $('.animate-box').each(function (){
            var val_one = $(this).offset().top - $(window).height() + 80;

            if (scroll_var > val_one){
                $(this).addClass('animated fadeInUp');
            }
        });
    }

});