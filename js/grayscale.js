/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $("a.page-scroll").hover(
            function(){$(this).css("background", "rgba(255,255,255,.3)")},
            function(){$(this).css("background", "none")}
        );
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$( '.thumbnails img' ).on("mouseover", function() {
        console.log('tween');
        TweenMax.to($(this), .8, {height:"106px", width:"306px", top:"-3px", ease:Elastic.easeOut});
        // TweenMax.to($(this), 0, {margin:"3px"});
});
$( '.thumbnails img' ).on("mouseleave", function() {
        console.log('tween');
        TweenMax.to($(this), .3, {height:"100px", width:"300px", top:"0px"});
        // TweenMax.to($(this), 0, {margin:"6px"});
});
$('.callTrain').on("click", function(){
    TweenMax.to($('.train'), 2.5, {delay:2,left:"0px", ease:Expo.easeOut});
});
var doorOpened = false;
var departing;

function reset(){
    $('.train').css("left", "1289px");
}
function depart(){
    if(doorOpened == false){
        departing = TweenMax.to($('.train'), 2, {delay:.5, left:"-2000px", ease:Expo.easeIn, onComplete:reset});
    }
}
$('.doorway').on("click", function(){
    if (doorOpened == false){
        TweenMax.to($('.leftdoor'), 1.5, {left:"-75px", ease:Linear.easeIn});
        TweenMax.to($('.rightdoor'), 1.5, {right:"-75px", ease:Linear.easeIn});
        doorOpened = true;
        departing.kill();//stops depart function
        console.log("door opened");
    }else{
        doorOpened = false;
        TweenMax.to($('.leftdoor'), 1.5, {left:"0px", ease:Linear.easeIn, onComplete:depart});
        TweenMax.to($('.rightdoor'), 1.5, {right:"0px", ease:Linear.easeIn});
        console.log("door closed"); 
    }
});







