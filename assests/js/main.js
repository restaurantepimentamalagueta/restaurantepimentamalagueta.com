$(function(){
    // Header Toggle
    $('#site-nav-toggle').on('click',function(){
        $('#site-nav').toggle();
        return false;
    });

    // Sticky Header
    var mainHeader=$('#main-header');
    window.addEventListener('scroll',function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrollTop){
            mainHeader.addClass('fxd-header');
            $('.main-header.overlay').removeClass('overlay').addClass('overfixed');
        }
        else {
            mainHeader.removeClass('fxd-header');
            $('.main-header.overfixed').removeClass('overfixed').addClass('overlay');
        }
        return false;
    });

    // Back to Top
    $('#back-to-top').on('click',function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });

    // Contact Style Fixed
    var contact=document.getElementsByClassName('dacy-contact-info');
    for(var i=0;i<contact.length;i++){
        $(contact[i]).css('height',$(contact[i]).siblings('.col-md-8').innerHeight());
    }

    // Isotope for Menu List
    var $grid = $('.dacy-menu-list-wrapper .dacy-menu-list').isotope({
        itemSelector: '.dacy-product',
        layoutMode: 'fitRows',
        filter: '.lunch'
    });
    $('#dacy-menu-filter').on('click', 'a', function(e) {
        e.preventDefault();
        var filterValue = $( this ).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        return false;
    });

    // Change is-checked class on buttons
    var buttonGroup=document.getElementsByClassName('button-group');
    for(var i=0;i<buttonGroup.length;i++){
        var button=buttonGroup[i];
        var liButton=button.getElementsByTagName('li');
        for(var j=0;j<liButton.length;j++){
            liButton[j].addEventListener('click',(function (button) {
                return function (ev) {
                    ev.preventDefault();
                    $(button).find('.active').removeClass('active');
                    $(this).addClass('active');
                    return false;
                }
            })(button))
        }
    }

    // Isotope for Gallery
    var $galleryGrid = $('.dacy-gallery').isotope({
        itemSelector: '.dacy-gallery-item',
        layoutMode: 'fitRows'
    });
    $('.dacy-gallery-filter').on('click', 'a', function(e) {
        e.preventDefault();
        var filterValue = $( this ).attr('data-filter');
        $galleryGrid.isotope({ filter: filterValue });
        return false;
    });

    // Testimonials Carousel
    $('#dacy-testimonials-list').owlCarousel({
        items:1,
        loop:true,
        autoplay:true
    });

    // Promo Carousel
    $('#dacy-about-carousel').owlCarousel({
        items:1,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:1
            }
        },
        nav:true,
        dots:false
    });
    $('#dacy-recom-carousel').owlCarousel({
        items:1,
        autoplay:true,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:1
            }
        },
        nav:true,
        dots:false
    });

    // Image Lightbox
    var imageLink=$('.dacy-image-link');
    var lightbox = (function() {
        imageLink.magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled:true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
            }
        });
        return false;
    })();

    // Search Form
    var search=$('#dacy-search');
    var searchForm = (function() {
        search.magnificPopup({
            type: 'inline'
        });
        return false;
    })();

if (typeof google === 'object' && typeof google.maps === 'object') {

    // Google Map
    var gmap=$('#dacy-gmap');
    var gMap = (function(){
        gmap.googleMap({
            coords: [48.895651, 2.290569], // Map center (optional)
            type: 'ROADMAP', // Map type (optional)
            zoom: 18 // Initial zoom level (optional)     
        });
        gmap.addMarker({
            coords: [48.895651, 2.290569], // GPS coords
            icon: 'assests/images/marker.png',
            text: 'Test',
            url: '', // Link to redirect onclick (optional)
            id: 'marker1' // Unique ID for your marker
        });
        gmap.addMarker({
            coords: [48.895691, 2.292569], // GPS coords
            icon: 'assests/images/marker.png',
            text: 'Test',
            url: '', // Link to redirect onclick (optional)
            id: 'marker2' // Unique ID for your marker
        });
        return false;
    })();
}


    // Counter
    $('.dacy-counter-box').appear(function() {
        $(this).find('.num').countTo();
        return false;
    });
});

//Pre Loader
$(window).load(function() {
    // Animate loader off screen
    $(".page-loader").fadeOut("fast");
    return false;
});