//input file type button
function getFile() {
    document.getElementById("myfile").click();
}

//slick-slider
$(document).ready(function(){
    $('.slick-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        margin: 30,
        arrows: false,
        autoplay:true,
        responsive:[{
            breakpoint: 768,
            settings:{
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings:{
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
});

$('#slick-next').on('click', function(){
    $('.slick-carousel').slick('slickNext');
});
$('#slick-previous').on('click', function(){
    $('.slick-carousel').slick('slickPrev');
});

$(document).ready(function(){
    $('.slick-carousel-2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        responsive:[{
            breakpoint: 768,
            settings:{
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings:{
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
});

$('#slick-next-2').on('click', function(){
    $('.slick-carousel-2').slick('slickNext');
});
$('#slick-previous-2').on('click', function(){
    $('.slick-carousel-2').slick('slickPrev');
});

//hamburger menu
$(".ham-btn").on("click", function(){
    $(".ham-btn").toggleClass("close-btn");
    $(".navbar").toggleClass("open-navbar");
});