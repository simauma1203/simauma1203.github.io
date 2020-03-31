//

var square = document.querySelector('#js-square');

new mojs.Tween({
    repeat:999,
    delay:100,
    speed:0.3,
    onUpdate: function(progress){
        var bounceProgress = mojs.easing.bounce.out(progress);
        square.style.transform='translateY('+200 * bounceProgress + 'px)';
    }
}).play();

