$( document ).ready(function() {

    function myFunction(x) {

        if (x.matches) {
            $('nav').css("padding", ".7rem");
            $('.navbar-brand').css("font-size", "1.5em");
            $('#header').css("height", "500px");
        }
        else {
            $('nav').css("padding", "2rem 1rem");
            $('nav .navbar-brand').css("font-size", "1.7em");
            $('#header').css("height", "700px");
        }
    }


    let x = window.matchMedia("(max-width: 500px)");
    myFunction(x);
    x.addListener(myFunction)

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

        let x = window.matchMedia("(max-width: 500px)");
        myFunction(x);

      }, 900);

    $(window).scroll(function() {

        let x = window.matchMedia("(max-width: 500px)");
        myFunction(x);

        if ($(this).scrollTop() > 30) {
            $('.fixed-top').css("opacity", ".8");
            $('nav').css("padding", ".7rem");
            $('.navbar-brand').css("font-size", "1.5em");
        } else {
            $('.fixed-top').css("opacity", "1");
            $('nav').css("padding", "2rem 1rem");
            $('nav .navbar-brand').css("font-size", "1.7em");
            x = window.matchMedia("(max-width: 500px)");
            myFunction(x);

        }

        for (let index = 1; index <= 4; index++) {
            $('.line'+index).css("width", "0%");
            if($( "nav ul li:nth-child(" + index + ") a" ).hasClass("active"))
                $('.line' + index).css("width", "100%");
        }

    });


    $( "#work .card-body" ).mouseover( function() {
            $( '.overlay .btn' ).css( "opacity", "1");
            $( '.overlay' ).css( "height", "100%");
        }
    );

    $( ".overlay" ).mouseleave( function() {
            $( '.overlay .btn' ).css( "opacity", "0");
            $( '.overlay' ).css( "height", "0");
        }
    );

});
