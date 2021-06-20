function init () {
    let canvas = document.querySelector('#learning-canvas');

    // load <canvas> settings...
    function loadCanvas () {

        resizeCanvas();

        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            drawOnCanvas(ctx);
        }
    }

    function drawOnCanvas (ctx) {

        console.log(ctx)
        var raf;

        var ball = {
            x: 100,
            y: 100,
            vx: 5,
            vy: 2,
            radius: 25,
            color: 'blue',
            draw: function () {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        };

        function draw () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ball.draw();

            if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
                ball.vy = -ball.vy;
            }
            if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
                ball.vx = -ball.vx;
            }

            raf = window.requestAnimationFrame(draw);
        }

        canvas.addEventListener('click', function (e) {
            raf = window.requestAnimationFrame(draw);
        });

        canvas.addEventListener('mouseout', function (e) {
            window.cancelAnimationFrame(raf);
        });

        ball.draw();
    }

    function resizeCanvas () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', () => loadCanvas());

    loadCanvas();
}

window.addEventListener('DOMContentLoaded', init);
