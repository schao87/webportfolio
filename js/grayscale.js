/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(document).ready(function(){
// jQuery to collapse the navbar on scroll
    new WOW().init();
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
        $('.train').css('visibility', 'visible');
        buttonHide();
    });
    var doorOpened = false;
    var departing;

    function reset(){
        $('.train').css("left", "1290px",'visibility', 'hidden');
        $('.doorway').css('pointer-events', 'auto');
        $('.callTrain').css('visibility', 'visible');
    }
    function buttonHide(){
        $('.callTrain').css('visibility', 'hidden');
    }
    function depart(){
        if(doorOpened == false){
            TweenMax.to($('.doorway'), 0, {pointerEvents:'none'});
            departing = TweenMax.to($('.train'), 2.5, {delay:.3, left:"-2000px", ease:Expo.easeIn, onComplete:reset});
        }
    }
    $('.doorway').on("click", function(){
        if (doorOpened == false){
            TweenMax.to($('.leftdoor'), 1.5, {left:"-75px", ease:Linear.easeIn});
            TweenMax.to($('.rightdoor'), 1.5, {right:"-75px", ease:Linear.easeIn});
            doorOpened = true;
        }else{
            doorOpened = false;
            TweenMax.to($('.leftdoor'), 1.5, {left:"0px", ease:Linear.easeIn, onComplete:depart});
            TweenMax.to($('.rightdoor'), 1.5, {right:"0px", ease:Linear.easeIn});
        }
    });
    ///////////////////////////////////// Target game logic ////////////////////////////////////////////
    var hitpoint = 0;
    var deadgif = 'url(./img/dogdead.gif)';
    var ammoCount = 30;
    var t1;
    var t2;
    var t3;
    var t4;
    var easter_egg = new Konami(function(){
        $('.gunCont').css('visibility', 'visible');
        $('.konami').css('visibility', 'hidden');
    });
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.konami').css('visibility', 'hidden');
        $('.gunCont').css('visibility', 'visible');
    }
    // var random = random();
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
        // console.log(randomleft1, randomleft2, randomleft3, randomleft4);
        flytime1=(Math.random() * 2)+.2;
        flytime2=(Math.random() * 2)+.2;
        flytime3=(Math.random() * 2)+.2;
        flytime4=(Math.random() * 2)+.2;
        // console.log(flytime1, flytime2, flytime3, flytime4);
        targetPull();
        TweenMax.to($('.target'), 0, {rotationY:0});
    };   
    function left2Rotate(){
        if (randomleft2 < randomleft1){
            TweenMax.to($('.target'), 0, {rotationY:180});
            // console.log('first left');
        }
    };
    function left3Rotate(){
        if (randomleft3 > randomleft2){
                TweenMax.to($('.target'), 0, {rotationY:0});
                // console.log('second left');
            }else{
             TweenMax.to($('.target'), 0, {rotationY:180});               
            }
    };
    function left4Rotate(){
        if (randomleft4 < randomleft3){
                TweenMax.to($('.target'), 0, {rotationY:180});
                // console.log('second left');
            }else{
                TweenMax.to($('.target'), 0, {rotationY:0});
            }
    };
    function targetPull(){
        t1=TweenMax.fromTo($('.target'), flytime1, {left:-60, top:randomtopStart}, {bezier:[{left:randomleft1, top:randomtop1}], ease:Linear.easeNone, onComplete:left2});
    };
    function left2(){
        left2Rotate();
        t2=TweenMax.to($('.target'), flytime2, {bezier:[{left:randomleft2, top:randomtop2}], ease:Linear.easeNone, onComplete:left3});
    };
    function left3(){
        left3Rotate();
        t3=TweenMax.to($('.target'), flytime3, {bezier:[{left:randomleft3, top:randomtop3}], ease:Linear.easeNone, onComplete:left4});
    };
    function left4(){
        left4Rotate();
        t4=TweenMax.to($('.target'), flytime4, {bezier:[{left:randomleft4, top:randomtop4}], ease:Linear.easeNone, onComplete:random});
    };
    function startGame(){
        random();
        targetPull();
        var rdy = new TimelineLite();
        rdy.to($('.ready'), 3, {scale:1.5,visibility:"visible",autoAlpha:1})
        .to($('.ready'), .3, {autoAlpha:0,visibility: 'hidden'})
        .to($('.go'), 1, {scale:1.5,visibility:'visible',autoAlpha:1}, '+=1')
        .to($('.go'), .3, {visibility: 'hidden',autoAlpha:0})
        .to($('.readyGo'), .1,{visibility:'hidden',autoAlpha:0});
        $('.start').css('visibility','hidden');
    };
    function hitTarget(){
        t1.kill();
        t2.kill();
        t3.kill();
        t4.kill();
        TweenMax.to($('.target'), .3, {top:"320px", ease:Linear.easeOut, onComplete:random});
        hitpoint++;
        $('.score').html("SCORE" + '<br>' + hitpoint);
        gameover();
        $('.ammo').html("AMMO" +'<br>' + ammoCount);
    };
    function missBkgrd(){
        gameover();
        $('.ammo').html("AMMO" +'<br>' + ammoCount);
        if (ammoCount%3 === 0 && ammoCount>1 || (ammoCount%3 ===0 && ammoCount%2===0)){dogUp();}
        if (ammoCount%2 === 0 && ammoCount%3 !==0){TweenMax.to($('.dog'), .4, {bottom:-75});}
    };
    function dogUp(){
        var laugh = new TimelineLite();
        laugh.to($('.dog'), .4, {bottom:35})
        .to($('.dog'), .4, {bottom:-75, delay:3});
    };
    
    function killDog(){
        
        var dogDead = new TimelineLite();
        dogDead.to($('.dog'), 0, {background:deadgif,width:177,height:160,left:20})
        .to($('.dog'), .2, {bottom:-75}, '+=.5')
        .to($('.dog'), 0, {background:"url('./img/dog.gif')",width:101,height:120,left:50});
        gameover();
        $('.ammo').html("AMMO" +'<br>' + ammoCount);
        hitpoint++;
        $('.score').html("SCORE" + '<br>' + hitpoint);      
    };
    function gameover(){
        if(ammoCount==1){
            t1.kill();
            t2.kill();
            t3.kill();
            t4.kill();
            $('.target').css('left','-60px');
            ammoCount--;
            var gm = new TimelineLite();
            gm.to($('.readyGo'), .1,{visibility:'visible',autoAlpha:1})
            .to($('.gameover'), .1, {scale:1.5,visibility:"visible",autoAlpha:1});
            $('.sessionScore').html("Score: " + hitpoint).css('visibility','visible');
            $('.enterBtn').css('visibility','visible');
        }else{
            ammoCount--;
        }
    };
    function resetGame(){
        ammoCount=30;
        hitpoint=0;
        $('.gameover').css('visibility','hidden');
        $('.ammo').html("AMMO" +'<br>' + ammoCount);
        $('.score').html("SCORE" + '<br>' + hitpoint);
        $('.start').css('visibility','visible');
        $('.enterBtn').css('visibility','hidden');
        $('.sessionScore').css('visibility','hidden');
    };
    $('.start').on('click', function(){
        startGame();
    });
    // $('.reset').on('click', function(){
    //     resetGame();
    // });
    $('.target').on('click', function(){
        hitTarget();
    });
    $('.gameBkgrd').on('click',function(){
        missBkgrd();
    });
    $('.grass').on('click',function(){
        missBkgrd();
    });
    $('.dog').on('click', function(){
        killDog();
    });
    $('.enterBtn').on('click', function(){
        resetGame();
    });
    var scores =[
        {
            'score': 20,
            'name': 'abc'
        },
        {
            'score': 22,
            'name': 'bbb'
        },
        {
            'score': 23,
            'name': 'ccc'
        },
        {
            'score': 11,
            'name': 'ccc'
        },
        {
            'score': 44,
            'name': 'ccc'
        },
        {
            'score': 55,
            'name': 'ccc'
        },
        {
            'score': 66,
            'name': 'ccc'
        },
        {
            'score': 44,
            'name': 'ccc'
        },
        {
            'score': 55,
            'name': 'ccc'
        },
        {
            'score': 66,
            'name': 'ccc'
        }
    ]
    var scores1 = [
       scores[0].score,
       scores[1].score,
       scores[2].score,
       scores[3].score,
       scores[4].score,
       scores[5].score,
       scores[6].score,
       scores[7].score,
       scores[8].score,
       scores[9].score
    ]
    console.log(scores1);
    // scores.sort(function(a, b){return b-a});
    // console.log(scores[0].score.val());
    $.each(scores, function(i,value){
        scores1.sort(function(a,b){return b-a});
        var name = scores[i].name;
        var score = scores[i].score; 
        $('.score' + i).append(name+' '+score);
        console.log(name, score );
        
    });
// ***********************   printer   *******************************************
    $('.knob').on('click', function(){
        function stageUp(){
            var up = new TimelineLite();
            up.to($('.knobLed'), .3, {opacity:"1", ease:Linear.easeNone, delay:.3})
                .to($('.knob'), 0, {pointerEvents:'none'})
                .to($('.screen'), .2, {opacity:"1", ease:Linear.easeNone})
                .to($('.slice'), 0, {visibility:'hidden'})
                .to($('.zstage'), 2, {marginTop:"-24px", ease:Linear.easeNone,delay:.4})
                .to($('.carriage'), 1, {marginLeft:"95px", ease:Linear.easeNone, delay:.2})
                .to($('.carriage'), 1.2, {marginLeft:"158px", ease:Linear.easeNone, onComplete:carriageMove});
        }
        function carriageMove(){
            var move = new TimelineLite();
            move.to($('.carriage'), 2.5, {marginLeft:"95px", ease:Linear.easeNone})
                .to($('.b1'), 0, {visibility:"visible"})
                .to($('.zstage'), .2, {marginTop:"-16px", ease:Linear.easeNone})
                .to($('.carriage'), 2.5, {marginLeft:"158px", ease:Linear.easeNone})
                .to($('.b2'), 0, {visibility:"visible"})
                .to($('.zstage'), .2, {marginTop:"-8px", ease:Linear.easeNone})
                .to($('.carriage'), 2.5, {marginLeft:"95px", ease:Linear.easeNone})
                .to($('.b3'), 0, {visibility:"visible"})
                .to($('.zstage'), .2, {marginTop:"0px", ease:Linear.easeNone})
                .to($('.carriage'), 2.5, {marginLeft:"158px", ease:Linear.easeNone})
                .to($('.b4'), 0, {visibility:"visible"})
                .to($('.zstage'), .2, {marginTop:"8px", ease:Linear.easeNone})
                .to($('.carriage'), 2.5, {marginLeft:"80px", ease:Linear.easeNone})
                .to($('.b5'), 0, {visibility:"visible"})
                .to($('.zstage'), .2, {marginTop:"16px", ease:Linear.easeNone})
                .to($('.carriage'), 2.5, {marginLeft:"158px", ease:Linear.easeNone})
                .to($('.b6'), 0, {visibility:"visible"})
                .to($('.zstage'), .2, {marginTop:"24px", ease:Linear.easeNone})
                .to($('.carriage'), 2.5, {marginLeft:"80px", ease:Linear.easeNone})
                .to($('.b7'), 0, {visibility:"visible"})
                .to($('.zstage'), .2, {marginTop:"32px", ease:Linear.easeNone})
                .to($('.carriage'), 1.5, {marginLeft:"100px", ease:Linear.easeNone})
                .to($('.b8'), 0, {visibility:"visible"})
                .to($('.zstage'), .2, {marginTop:"40px", ease:Linear.easeNone})
                .to($('.carriage'), 1, {marginLeft:"80px", ease:Linear.easeNone})
                .to($('.b9'), 0, {visibility:"visible"})
                .to($('.zstage'), .2, {marginTop:"48px", ease:Linear.easeNone})
                .to($('.carriage'), 1, {marginLeft:"110px", ease:Linear.easeNone})
                .to($('.b10'), 0, {visibility:"visible"})
                .to($('.zstage'), .2, {marginTop:"56px", ease:Linear.easeNone})
                .to($('.carriage'), 1, {marginLeft:"85px", ease:Linear.easeNone})
                .to($('.b11'), 0, {visibility:"visible"})
                .to($('.carriage'), 1, {marginLeft:"121px", ease:Linear.easeNone})
                .to($('.b12'), 0, {visibility:"visible"})
                .to($('.knob'), 0, {pointerEvents:'auto'});
        }
        stageUp();
    })
// *********************** optimus ***************************
    var vehicle;
    function truck(){
        vehicle = true;
    };
    function robot(){
        vehicle = false;
    }
    var prime = new TimelineMax();
        prime.to($(".forearm"), .4, {marginTop:'-35px', delay: .5, ease: Bounce.easeOut})
            .to($('.hands'), .4, {marginTop:'-35px', ease: Bounce.easeOut})
            .to($('.abs'), .4, {borderLeft: '0', borderRight: '0', width: '158px', ease: Bounce.easeOut}, 'widenUp')
            .to($('.redAbs'), .41, {width: '158px', ease: Bounce.easeOut}, 'widenUp')
            .to($('.pelvis'), .4, {width: '160px', ease: Bounce.easeOut}, 'widenUp')
            .to($('.reflectors'), 0, {display: 'none'}, 'widenUp')
            .to($('.rightArm'), .4, {marginLeft: '92px', ease: Bounce.easeOut}, 'armsIn')
            .to($('.leftArm'), .4, {marginRight: '90px', ease: Bounce.easeOut}, 'armsIn')
            .to($('.head'), .4, {marginTop: '70px', ease: Bounce.easeOut})
            .to($('.torsoTop'), .4, {marginTop: '75px', ease: Bounce.easeOut}, 'dropDown')
            .to($('.arms'), .4, {marginTop: '75px', ease: Bounce.easeOut}, 'dropDown')
            .to($('.head'), .4, {marginTop: '145px', ease: Bounce.easeOut}, 'dropDown')
            .to($('.torsoTop'), .4, {marginTop: '242px', ease: Bounce.easeOut}, 'dropDown2')
            .to($('.torsoTop'), .4, {marginTop: '242px', ease: Bounce.easeOut}, 'dropDown2')
            .to($('.arms'), .4, {marginTop: '242px', ease: Bounce.easeOut}, 'dropDown2')
            .to($('.head'), .4, {marginTop: '316px', ease: Bounce.easeOut}, 'dropDown2')
            .to($('.thighs'), .4, {marginTop: '74px', ease: Bounce.easeOut}, 'dropDown2')
            .to($('.leg'), 0, {display: 'none'})
            .to($('.tires'), .2, {display: "block"})
            .to($('.torsoTop'), .4, {marginTop: '226px', ease: Bounce.easeOut}, 'bounceUp')
            .to($('.torsoTop'), .4, {marginTop: '226px', ease: Bounce.easeOut}, 'bounceUp')
            .to($('.arms'), .4, {marginTop: '226px', ease: Bounce.easeOut}, 'bounceUp')
            .to($('.head'), .4, {marginTop: '300px', ease: Bounce.easeOut}, 'bounceUp')
            .to($('.thighs'), .4, {marginTop: '58px', ease: Bounce.easeOut}, 'bounceUp')
            .to($('.lights'), .4, {opacity: '1', onComplete:truck});
    
    
    $('.wrap').on('click', function(){
        if(vehicle == true){
            prime.reverse();
            robot();
        }else{
            prime.play();
            truck();
        }
    });
});







