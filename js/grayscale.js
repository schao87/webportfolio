/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(document).ready(function(){
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
    /////////////////////////////////////////////Train logic//////////////////////////////////////////
    $('.callTrain').on('mousedown', function(){
        $(this).css('background', 'yellow');
    });
    $('.callTrain').on("mouseup", function(){
        TweenMax.to($('.train'), 3, {delay:1, left:"0px", ease:Expo.easeOut});
        $(this).css('background', 'red');
        buttonHide();
    });
    var doorOpened = false;
    var departing;

    function reset(){
        $('.train').css("left", "1290px");
        $('.callTrain').css('visibility', 'visible');
    }
    function buttonHide(){
        $('.callTrain').css('visibility', 'hidden');
    }
    function depart(){
        if(doorOpened == false){
            departing = TweenMax.to($('.train'), 2, {delay:.3, left:"-2000px", ease:Expo.easeIn, onComplete:reset});
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
    ///////////////////////////////////// Target game logic ////////////////////////////////////////////
    var hitpoint = 0;
    var misspoint = 0;
    // var random1;
    function random(){
        randomtop1=Math.floor((Math.random() * 300) + 1);
        randomtop2=Math.floor((Math.random() * 300) + 1);
        randomtop3=Math.floor((Math.random() * 300) + 1);
        randomtop4=Math.floor((Math.random() * 300) + 1);
        randomleft1=Math.floor((Math.random() * 600) + 1);
        randomleft2=Math.floor((Math.random() * 600) + 1);
        randomleft3=Math.floor((Math.random() * 600) + 1);
        console.log(randomtop1, randomtop2, randomtop3, randomleft1, randomleft2, randomleft3);
        targetPull();
    };
    // random();
    
    function targetPull(){
        TweenMax.fromTo($('.target'), 4, {left:-60, top:randomtop4}, {bezier:[{left:randomleft1, top:randomtop1}, {left:randomleft2, top:randomtop2}, {left:randomleft3, top:randomtop3}], ease:Linear.easeNone, onComplete:random});
    };
    
    $('.start').on('click', function(){
        // targetReset();
        random();
        targetPull();
    });
    $('.target').on('click', function(){
            TweenMax.to($('.target'), .4, {top:"300px", ease:Linear.easeOut, onComplete:random});
            hitpoint++;
            $('.hit').html("HIT" + '<br>' + hitpoint);
        });
    $('.gungame').on('click',function(){
        misspoint++;
        $('.miss').html("MISS" +'<br>' + misspoint);
    });

});







