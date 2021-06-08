function init() {
    let canvas = document.querySelector('#learning-canvas');

    // load <canvas> settings...
    function loadCanvas() {
        resizeCanvas();
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        console.log(canvas);
    }

    loadCanvas();

    window.addEventListener('resize', () => resizeCanvas());
}

window.addEventListener('DOMContentLoaded', init);
