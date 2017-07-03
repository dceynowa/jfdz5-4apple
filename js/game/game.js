var position = 0;
var height = 0;
var planePosition = 0;
var roundTimeInSeconds = 60;
var planesPathLength = $('.board').width() - $('.plane').width();
var intervalTime = parseInt((roundTimeInSeconds / planesPathLength) * 1000);


$(window).keydown(function (e) {
    $character = $('.character');
    if (e.keyCode === 37) {
        if (position > -255)
            position -= 15;

        $character.css({
            'transform': 'translateX(' + position + 'px)',
            'background': 'url("img/ludzik-z-workiem-lewo.png")',
            'background-size': 'cover'
        });
    }
    else if (e.keyCode === 39) {
        if (position < 255)
            position += 15;

        $character.css({
            'transform': 'translateX(' + position + 'px)',
            'background': 'url("img/ludzik-z-workiem-prawo.png")',
            'background-size': 'cover'
        });
    }
});

var roundTiming = setInterval(function () {

    if (planePosition > -525) {
        planePosition -= 1;
        $('.plane').css({
            'transform': 'translateX(' + planePosition + 'px)'
        });
    }
    else {
        clearInterval(roundTiming);
        clearInterval(cardboardBoxFall);
    }
}, intervalTime);

var cardboardBoxFall = setInterval(function () {
    var $cardboardBox = $('.cardboard-box');
    height += 15;
    $cardboardBox.css({
        'transform': 'translateY(' + height + 'px)'
    });
    if (height >= 480) {
        $cardboardBox.hide();
    }
}, 100);
