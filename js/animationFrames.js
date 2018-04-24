//Request Animation Frame
//Link do poradnika: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
})();