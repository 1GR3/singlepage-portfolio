


/* mo-js */
import mojs from 'mo-js';
'use strict';
var DURATION = 600;
var smoke = new mojs.Burst({
    left: 0,
    top: 0,
    degree: 0,
    count: 12,
    radius: { 0: 100 },
    children: {
        fill: 'rgba(255,255,255,.5)',
        pathScale: 'rand(0.5, 2.5)',
        radius: 'rand(10, 12)',
        swirlSize: 'rand(7, 12)',
        swirlFrequency: 'rand(2, 4)',
        direction: [
            1,
            -1
        ],
        duration: 'rand(' + 1 * DURATION + ', ' + 2 * DURATION + ')',
        delay: 'rand(0, 75)',
        easing: 'quad.out',
        isSwirl: true,
        isForce3d: true
    }
});
document.addEventListener('click', function (e) {
    smoke.tune({
        x: e.pageX,
        y: e.pageY
    }).generate().replay();
});
				
				
				
$('footer').particleground({
    dotColor: '#d9d9d9',
    lineColor: '#EEEEEE'
});
