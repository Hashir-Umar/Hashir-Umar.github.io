$( document ).ready(function() {

    setTimeout( function() {

        $('nav').css("padding", "30px 10px");
        $('.right-slide').css("right", "0px");
        $('.right-slide').css("opacity", "1");
        $('.left-slide').css("left", "0px");
        $('.left-slide').css("opacity", "1");
        $('.top-slide').css("top", "0px");
        $('.top-slide').css("opacity", "1");

      }, 100);

    setTimeout( function() {

        $('#header').css("height", "700px");
        $('#header').css("opacity", "1");

      }, 900);

    $(window).scroll(function() {

        if ($(this).scrollTop() > 30) {
            $('.fixed-top').css("opacity", ".8");
            $('nav').css("padding", ".5rem");
            $('.navbar-brand').css("font-size", "1.5em");
        } else {
            $('.fixed-top').css("opacity", "1");
            $('nav').css("padding", "2rem 1rem");
            $('nav .navbar-brand').css("font-size", "1.7em");
        }

        for (let index = 1; index <= 4; index++) {
            $('.line'+index).css("width", "0%");
            if($( "nav ul li:nth-child(" + index + ") a" ).hasClass("active"))
                $('.line' + index).css("width", "100%");
        }

    });

    $('.carousel').carousel({
      interval: 2000
    })

    $( "#work img" ).mouseover( function() {
            $( '.mycard .details' ).css( "opacity", "1");
            $( '.mycard' ).css( "height", "100%");
        }
    );

    $( ".mycard" ).mouseleave( function() {
            $( '.mycard' ).css( "height", "0");
            $( '.mycard .details' ).css( "opacity", "0");
        }
    );

});
