;(function($){
    $(function (){

        //Menu
        $('#hamburger').click(function() {
            var clicks = $(this).data('clicks');
            if (clicks) {
                $('#nav').css('display', 'none');
            } else {
                $('#nav').css({
                    'display': 'flex',
                    'flex-direction': 'column',
                    'width': '95px',
                    'align-items': 'start',
                    'height': '300px',
                    'margin' : '0 20px 0 0'
                });
            }
            $(this).data("clicks", !clicks);
        });
        //
        //Slick-slider
        $('.reviews__slick').slick({
            autoplay:true,
            autoplaySpeed: 5000,
            arrows:true,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 700,
                settings: {
                    arrows: false
                }
            }]
        });
        //
        //map menu
        $('.header__btn').on('click', function () {
            $('.modal__contact, .dark__background').css('display','flex');
        });
        $('.modal__contact__close').on('click', function (){
            $('.modal__contact, .dark__background').hide();
        })

        //smooth scrolling
        $("body").on('click', '[href*="#"]', function(e){
            var fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
        });
        //
        //Close modal by html click
        $('html').mouseup(function (e) {
            let container = $(".modal__news__video, .modal__contact, .modal__enter, .modal__bag");
            if (container.has(e.target).length === 0){
                container.hide();
                $('.dark__background').hide();
            }
        });




    });
})(jQuery);

