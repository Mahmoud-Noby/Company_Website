
// navbar linkes active onclick
  $('.navbar-nav li').click( function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

//sections on scrolling 
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 90){
        $('.fixed-top').css('background', 'transparent');
        $('.fixed-top').css('margin-top', '50px');
       } else{
             $('.fixed-top').css('background', 'black');
             $('.fixed-top').css('margin-top', '0');
    }
 });
//css animation Libarary

AOS.init({
    duration: 2000,
});

// portfolio 
$(function () {
    var filterList = {
        init: function () {
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.all'
                }
            });
        }
    };
    // Run the show!
    filterList.init();
});	
    //back to top
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        }else{
            $('#topBtn').fadeOut();  
        }
    });

    $("#topBtn").click(function(){
        $('html , body').animate({scrollTop : 0}, 1100);
    });
});


// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 30.057032 , lng:  31.348567 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }




  