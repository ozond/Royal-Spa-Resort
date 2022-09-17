$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
    $(this).toggleClass('active');
    $('.menu__list').toggleClass('active');
});
$('.menu__list').click(function(event) {
    $(this).toggleClass('active');
    $('.icon-menu').toggleClass('active');
});

function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();

//slick slider
if($(window).width() > "834"){
    $(document).ready(function(){
        $('.slider__body_h').slick({
            arrows: true,
            dots: false,
            adaptiveHeight: true,
            autoplay: true,
        });
    });
}
$(document).ready(function(){
    $('.slider__body_c').slick({
        arrows: true,
        dots: true,
        slidesToScroll: 2,
        slidesToShow: 2,
        speed: 1000,
        responsive: [
            {
              breakpoint: 834,
              settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 428,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});
if($(window).width() < "1242"){
    $(document).ready(function(){
        $('.slider__body_o').slick({
            arrows: false,
            dots: true,
        });
    });
}

//Smooth scroll
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            var hash = this.hash;
    
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
    });
});
