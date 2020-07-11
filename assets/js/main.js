	 
    // Carousel Slier
    $(".carousel-active").owlCarousel({
        items:1,
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    });
      $(".carousel-screenshort").owlCarousel({
        items:4,
        margin:20,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    });
     $(".carousel-test").owlCarousel({
        items:2,
        margin:30,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    });
     $(".carousel-team").owlCarousel({
        items:4,
        margin:30,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    });
      
     // wow
    new WOW().init();
    //counterup
    $('.counter').counterUp({
        delay : 10,
        time: 1000
    });
    //onepagenave
    $('#nav').onePageNav({
     
});