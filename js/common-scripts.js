
(function($){
	$(function(){

        
        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").addClass("navShown");
        });
        $('.close-menu, .close-area').click(function () {
            $("body").removeClass("navShown");
        });

        
        if ($('.newsletter-item-wrap').length) {
            $('.newsletter-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                speed: 700,
                navigation:false,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow:1,
                        }
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow:3,
                        }
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.newsletter-item-wrap').slick('resize');
            });
        }
        
        var $animation_elements = $('.anim, .thumb-animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height() / 1.3;
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);
            $.each($animation_elements, function () {
                var $element = $(this);
                var element_top_position = $element.offset().top;
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {}
            });
        }
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        
        
        if ($('.split-heading').length) {
            var res = Splitting({
                target: '.split-heading',
                by: 'lines',
            });

            Splitting();

            res.forEach((splitResult) => {
                const wrappedLines = splitResult.lines.map((wordsArr) => `
            <span class="line"><span class="mask-up">
            ${wordsArr.map((word) => `${word.outerHTML}<span class="whitespace">
            </span>`).join('')}
            </span></span>`).join('');
                splitResult.el.innerHTML = wrappedLines;
            });
            inView.threshold(0.75);
            inView(".split-heading").on("enter", function (el) {
                if (!el.classList.contains("has-animated")) {
                    anime({
                        targets: el.querySelectorAll(".mask-up"),
                        translateY: ["100%", "0%"],
                        duration: 700,
                        delay: anime.stagger(500),
                        easing: "easeOutQuad",
                        autoplay: true
                    });
                    el.classList.add("has-animated");
                }
            });
        }
        
        $('.cart-trigger').on('click', function(){
            $('body').addClass('cartShow')
        })
        $('.back-arrow, .product-cart-wrap').on('click', function(){
            $('body').removeClass('cartShow')
        })
        $('.product-cart-main-area').on('click', function(e){
            e.stopPropagation()
        })
        
        
        
        
        if ($('.merch-item-wrap').length) {
            $('.merch-item-wrap').slick({
                autoplay: false,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots:true,
                infinite: false,
                responsive: [
                    {
                            breakpoint: 768,
                            settings: 'unslick'
                    }
                ]
            })
        
            $(window).on('resize', function () {
                $('.merch-item-wrap').slick('resize');
                });
        }
        
        
        //Cocktail modal
        $('.cola-recipe').click(function (e) {
            e.preventDefault();
            $('.cola-short, .modal-close').fadeIn();
            $('body').addClass('modal-show');
        })
        $('.coctail-close, .modal-close').click(function () {
            $('.cola-short, .modal-close').fadeOut();
            $('body').removeClass('modal-show');
        })
        
        $('.shot-recipe').click(function (e) {
            e.preventDefault();
            $('.whip-short, .modal-close').fadeIn();
            $('body').addClass('modal-show');
        })
        $('.coctail-close, .modal-close').click(function () {
            $('.whip-short, .modal-close').fadeOut();
            $('body').removeClass('modal-show');
        })
        
        $('.coffee-recipe').click(function (e) {
            e.preventDefault();
            $('.coffee-short, .modal-close').fadeIn();
            $('body').addClass('modal-show');
        })
        $('.coctail-close, .modal-close').click(function () {
            $('.coffee-short, .modal-close').fadeOut();
            $('body').removeClass('modal-show');
        })
        
        
        
        
        $(window).on('scroll', function () {
            var windowScrollPos = $(this).scrollTop() / 15;
            setTimeout(function () {
                $('.anim-parallax').css("transform", `translateY(${-windowScrollPos}px)`)
            }, 65)


        })
        
        
        
        //19-07-22
        var thisSrc = $('.story-btn a').attr('href')
        $('.story-btn a').click(function(e){
            e.preventDefault()
            $("#video-player").attr(
                "src",
                thisSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&controls=1"
            );
            $('.story-video').fadeIn();
            $('body').addClass('video-show');
        });

        $('.story-video').click(function(){
            $('.story-video').fadeOut();
            $('body').removeClass('video-show');
            $("#video-player").attr("src", '');
        });
        
        
        $('.anchor-link').click(function(e){
            e.preventDefault();
            var target = $($(this).attr('href'));
            if(target.length){
                var scrollTo = target.offset().top;
                $('body, html').animate({scrollTop: scrollTo+'px'}, 100);
            }
        });
        
        $('.anchor-link').click(function(){
           $('body').removeClass('navShown') 
        });
        
        
		
	})// End ready function.
   
    
    /* Slick needs no get Reinitialized on window Resize after it was destroyed */
    $(window).on('load resize orientationchange', function() {
        $('.carousel-wrap').each(function(){
            var $carousel = $(this);
            / Initializes a slick carousel only on mobile screens /
            // slick on mobile
            if ($(window).width() > 767) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            }
            else{
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        infinite: true,
                        dots: false,
                        autoplay: true,
                        prevArrow: $('.billing-solutions-section .prev-btn'),
                        nextArrow: $('.billing-solutions-section .next-btn'),
                    });
                }
            }
        });
    });
    // End the solutin card carousel
    


})(jQuery)

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}