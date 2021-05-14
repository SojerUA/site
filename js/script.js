$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        initialSlide:1,
        autoplay:true,
        autoplaySpeed:2000,
        touchThreshold:10,
        asNavFor:".slider_text,.slider_name"
    });
    $('.slider_text').slick({
        slidesToShow:1,
        fade:true,
        adaptiveHeight:false
    });
    $('.slider_name').slick({
        slidesToShow:1,
        fade:true,
        adaptiveHeight:false
    });
});
var height=$('#header').height();
$(window).scroll(function(){
   if($(this).scrollTop()>height){
      $('.navbar').addClass('fixed');
    }
    else{
      $('.navbar').removeClass('fixed');
    }
});
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.5876816, lng: -87.6700167 },
    zoom: 13,
  });
    var marker = new google.maps.Marker({
    position:{lat:41.5876816, lng:-87.6700167},
    map:map
});
}

$('.number_employer').each(function() {
    $(this).prop('Counter',0).animate({
        Counter:$(this).text()
    },{
        duration: 5000,
        easing: 'swing',
        step:function(now){
        $(this).text(Math.ceil(now));
    }
    });
})








