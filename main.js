window.addEventListener("DOMContentLoaded", setBodyGradientOnLoad);

function setBodyGradientOnLoad() {
    var heightPx = window.innerHeight;
    var gradientStop = Math.floor( heightPx * 0.3 );
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = "linear-gradient(to bottom, ffd700, ffd700 " + gradientStop + "px, 222222 " + gradientStop + "px, 222222)";
}