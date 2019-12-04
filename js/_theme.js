/* =========================================================================
global variables
========================================================================== */
//watchers for major breakpoint changes - move from small screen to large screen layout/styles
//these match up to
(function () {
    var mq = {
        end: window.matchMedia("(max-width: 799px)")
    }

    //container ID/class names called by specific functions
    var selectors = {
        searchForm: '.search-form',
        advancedSearchForm: '.advanced-search-form',
        pageWrap: '#page',
        socialShare: '.social-share',
        socialShareMore: '.share-more'
    }



    /* =========================================================================
    slideout filters for search results on small screens
    ========================================================================= */
    if ($('#search-results').length == 1) window.APP.MODELS.FilterSlideOut.create({
        breakpoint: 800,
        animationSpeed: 200,
        pageWrapId: 'page',
        filterType: 'search',
        openToggle: 'Filter',
        closeToggle: 'Close'
    });

    /* =========================================================================
     Close for new meet the team module
    ========================================================================== */

        $('.photo-square__button').click(function() {
          $(this).next( ".story-popup" ).css('display', 'block');
        });

        $('.js-close-popup').click(function() {
          $(this).closest( ".story-popup" ).css('display', 'none');
        });

        // $('.entry-text .close').click(function() {
        //     $( ".photo-square" ).removeClass('expandable-child-open');
        //     $(this).closest( ".entry-text" ).removeClass('expandable-childlist-open');
        //     $(this).closest( ".entry-text" ).css('display', 'none');
        //     $(this).closest( ".entry-text" ).attr("aria-hidden", "true");
        //     $(this).closest( ".entry-text" ).attr("aria-expanded", "false");
        // });
        //
        // $('.first-row .photo-square').click(function() {
        //     $( ".second-row .photo-square" ).removeClass('expandable-child-open');
        //     $( ".second-row .entry-text" ).removeClass('expandable-childlist-open');
        //     $( ".second-row .entry-text" ).css('display', 'none');
        //     $( ".second-row .entry-text" ).attr("aria-hidden", "true");
        //     $( ".second-row .entry-text" ).attr("aria-expanded", "false");
        // });
        //
        // $('.second-row .photo-square').click(function() {
        //     $( ".first-row .photo-square" ).removeClass('expandable-child-open');
        //     $( ".first-row .entry-text" ).removeClass('expandable-childlist-open');
        //     $( ".first-row .entry-text" ).css('display', 'none');
        //     $( ".first-row .entry-text" ).attr("aria-hidden", "true");
        //     $( ".first-row .entry-text" ).attr("aria-expanded", "false");
        // });

    /* =========================================================================
    social share open/close toggle
    ========================================================================== */
    $(selectors.socialShare)
        .on('click', selectors.socialShareMore, function () {
            var parent = $(this).parents(selectors.socialShare);
            parent.toggleClass('share-open');
            var moreText = $(this).attr('data-more-text');
            var lessText = $(this).attr('data-less-text');
            //on large screens, move the second list items into the first list, instead of sliding the list down
            if (parent.hasClass('share-open')) {
                $(this).text(lessText);
            }
            else {
                $(this).text(moreText);
            }
            return;
        });
})();

$('.menu-button').click(function(){
    $('.main-nav').slideToggle('fast');
});

$(window).load(function() {

   // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    direction: "vertical",
    controlNav: false,
    directionNav: true,
    pausePlay: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 93,
    itemMargin: 25,
    move: 2,
    minItems: 3,
    //maxItems: 3,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: "slide",
    direction: "horizontal",
    controlNav: false,
    directionNav: false,
    pausePlay: false,
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });

});

$("#carousel .slides li").click(function() {
    $('html, body').animate({
        scrollTop: $("#slider").offset().top
    });
});

// $(function(){
//       SyntaxHighlighter.all();
//     });

    $(window).load(function(){
        $('.flexslider-banner').flexslider({
            animation: "slide",
            animationLoop: true,
            controlNav: false,
            directionNav: false,
            pausePlay: false,
            start: function(slider){
            $('body').removeClass('loading');
            }
        });
    });

// Show/ Hide Job Alerts form
$('.signup-expand').click(function() {
    var txt = $('.ja-hide').is(':visible') ? 'Sign up' : 'Close';
    $(this).text(txt);
    $(this).next().slideToggle();
});

$('.link-to-benefits').click(function(e) {
    e.preventDefault();
    document.getElementById('benefitslink').click();

});

/* =========================================================================
Tabbed Content
========================================================================== */
$(document).ready(function(){

	$('.tab__link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab__link').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

$(".tab-content__acc-button").click(function(){

  $(this).attr("aria-expanded", function (i, attr) {

    return attr == "true" ? "false" : "true"

  });

});

//toggle for Working at BWFH - CP
// $('.working-content > ul a.link').click(function(e) {
//     e.preventDefault();
//     var link = $('.working-content a.link');
//     var height = $(this).attr('data-height');
//
//
//     if(!$(this).hasClass('faqs')) {
//         if(link.hasClass('active')) {
//             $('.working-content .active').not(this).removeClass('active').siblings('div').removeClass('show');
//
//             if($('.faqs-wrapper').hasClass('show')) {
//               $('.faqs-wrapper').removeClass('show');
//             }
//         }
//
//         $(this).addClass('active').siblings('div').addClass('show');
//
//     } else {
//         if(link.hasClass('active')) {
//             $('.working-content .active').not(this).removeClass('active').siblings('div').removeClass('show');
//         }
//
//         $(this).addClass('active');
//         $('.faqs-wrapper').addClass('show');
//
//     }
//
//
//     $('.working-content').css('min-height', height);
//     if(screen.width < 800){
//     $('html, body').animate({
//         scrollTop: $(this).offset().top
//     });
//     }
// });

//toggle for FAQs
$('.faqs-wrapper .faq-link').click(function(){
  var link = $('.faqs-wrapper .faq-link');

  if(link.hasClass('active')) {
    $('.faqs-wrapper .active').not(this).removeClass('active').next().removeClass('show');
  }

  $(this).toggleClass('active').next().toggleClass('show');
})


// Get and Append Video Title


$(".lazy-video a").click(function(e){

  e.preventDefault();

  var vidURL = $(this).attr('href');
  var imgURL = $(this).find('img').attr('src');
  var imgAlt = $(this).find('img').attr('alt');
  var newVideo = '<div class="video-wrapper"><iframe src="' + vidURL + '?rel=0&autoplay=1&cc_load_policy=1" allow=“autoplay; fullscreen” title="' + imgAlt + '"></iframe></div>';

  resetLazyVideo();

  $(this).parent().addClass('active').append(newVideo);

})

// If a video is playing already, and a visitor clicks on another video on the same page, it will destroy the initial video and then load the new one.

function resetLazyVideo(){

$('div.lazy-video.active').each(function(i){

  $(this).removeClass('active').find('div.video-wrapper').remove();

})

}



//Career Areas in page navigation
$("#sub-nav-career-areas > li").click(function(){
  var SContent = $(this).attr("data-show"); //li attr

  if ($(window).width() < 800) {
     $("#default-preview").hide(); //hide the leading paragraph
     $("#"+SContent+"").hide(); //hide all desktop divs
     $("#sub-nav-career-areas > li > .mobile-content-preview").html(""); //reset all mobile divs to empty
     $(this).children(".mobile-content-preview").html( $("#"+SContent+"").html() ); //fill content of mobile from content of desktop div
     $("html, body").scrollTop( $(this).position().top ); //make window scroll to top of this section

     $(".show-content:not(#default-preview)").removeClass("show-content"); //remove show-content from all desktop divs - prepped for changing from portrait to landscape
     $("#"+SContent+"").addClass("show-content").removeAttr('style'); //add show content class - class has a display none so it shouldn't show up until switching to landscape

  }
  else { //use desktop functions

    $("#sub-nav-career-areas > li > .mobile-content-preview").html(""); //reset all mobile divs to empty to prime switching from landscape to portrait
    $(this).children(".mobile-content-preview").html( $("#"+SContent+"").html() ); //add content to mobile divs - shouldn't show up unless on mobile

    $(".show-content").fadeOut( //fade out current slide
      function(){ //after animation is done follow these steps
        $("#default-preview").hide(); //hide the leading paragraph
        $(this).removeClass("show-content");
        $("#"+SContent+"").fadeIn().addClass("show-content"); //add show content class to selected div
      }
    );

  }
});

//Career Areas sub nav continued
$(window).resize(function(){
    if ($(window).width() < 800) {
        $(".show-content:not(#default-preview)").hide(); //if below 800 pixels hide all open desktops divs
        //$("#default-preview").show(); //show the leading paragraph
    }
    else {
        if( $(".show-content:not(#default-preview)").length > 0 ){ //if desktop and a desktop div is supposed to be open
            $("#default-preview").hide(); //hide the leading paragraph
            $(".show-content:not(#default-preview)").removeAttr('style'); //remove any inline styles so class can take priority
        }
    }
});
