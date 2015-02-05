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
    });
    $( '.thumbnails img' ).on("mouseleave", function() {
            console.log('tween');
            TweenMax.to($(this), .3, {height:"100px", width:"300px", top:"0px"});
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
            departing = TweenMax.to($('.train'), 2.5, {delay:.3, left:"-2000px", ease:Expo.easeIn, onComplete:reset});
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
    var easter_egg = new Konami(function(){
        $('.gunCont').css('visibility', 'visible');
    });
    function random(){
        randomtopStart=Math.floor((Math.random() * 300));
        randomtop1=Math.floor((Math.random() * 300));
        randomtop2=Math.floor((Math.random() * 300));
        randomtop3=Math.floor((Math.random() * 300));
        randomtop4=Math.floor((Math.random() * 300)+300);
        randomleft1=Math.floor((Math.random() * 600));
        randomleft2=Math.floor((Math.random() * 600));
        randomleft3=Math.floor((Math.random() * 600));
        randomleft4=Math.floor((Math.random() * 600) + 300);
        console.log(randomtop1, randomtop2, randomtop3, randomleft1, randomleft2, randomleft3);
        targetPull();
        // $('.target').css('background', 'url("img/duck.gif") no-repeat');
        TweenMax.to($('.target'), 0, {rotationY:0});
    };
    function left2Rotate(){
        if (randomleft2 < randomleft1){
            TweenMax.to($('.target'), 0, {rotationY:180});
            console.log('first left');
        }
    };
    function left3Rotate(){
        if (randomleft3 > randomleft2){
                TweenMax.to($('.target'), 0, {rotationY:0});
                console.log('second left');
            }else{
             TweenMax.to($('.target'), 0, {rotationY:180});               
            }
    };
    function left4Rotate(){
        if (randomleft4 < randomleft3){
                TweenMax.to($('.target'), 0, {rotationY:180});
                console.log('second left');
            }else{
                TweenMax.to($('.target'), 0, {rotationY:0});
            }
    };
    function targetPull(){
        TweenMax.fromTo($('.target'), 2.3, {left:-60, top:randomtopStart}, {bezier:[{left:randomleft1, top:randomtop1}], ease:Linear.easeNone, onComplete:left2});
    };
    function left2(){
        left2Rotate();
        TweenMax.to($('.target'), 2.3, {bezier:[{left:randomleft2, top:randomtop2}], ease:Linear.easeNone, onComplete:left3});
    };
    function left3(){
        left3Rotate();
        TweenMax.to($('.target'), 2.7, {bezier:[{left:randomleft3, top:randomtop3}], ease:Linear.easeNone, onComplete:left4});
    };
    function left4(){
        left4Rotate();
        TweenMax.to($('.target'), 2.7, {bezier:[{left:randomleft4, top:randomtop4}], ease:Linear.easeNone, onComplete:random});
    };
    $('.start').on('click', function(){
        random();
        targetPull();
    });
    $('.target').on('click', function(){
            TweenMax.to($('.target'), .5, {top:"320px", ease:Linear.easeOut, onComplete:random});
            hitpoint++;
            $('.hit').html("HIT" + '<br>' + hitpoint);
            // $(this).css({'background': 'url("img/duck.gif") no-repeat', 'background-size': 'contain'});
        });
    $('.gungame').on('click',function(){
        misspoint++;
        $('.miss').html("MISS" +'<br>' + misspoint);
    });
});







