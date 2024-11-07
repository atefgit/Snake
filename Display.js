export class Display {
    constructor(width, height, scale = 10, speed = 100) {
        this.score = 0;
        this.scale = scale;
        this.speed = speed;
        const canvas = document.createElement('canvas');
        canvas.width = width * this.scale;
        canvas.height = height * this.scale;
        this.ctx = canvas.getContext('2d');
        const display = document.getElementById("display");
        if (display != null)
            display.appendChild(canvas);
    }
    drawRectangle(x, y, color) {
        if (this.ctx != null) {
            this.ctx.beginPath();
            this.ctx.fillStyle = color;
            this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
        }
    }
    clear() {
        if (this.ctx != null) {
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        }
    }
    refreshScore() {
        const scoreElement = document.getElementById("score");
        if (scoreElement != null)
            scoreElement.innerHTML = this.score.toString();
    }
    play(game) {
        let lastChrono;
        let done = false;
        const loop = (chrono) => {
            if (!lastChrono)
                lastChrono = chrono;
            const delta = chrono - lastChrono;
            if (delta >= this.speed) {
                if (this.ctx != null) {
                    this.clear(); // Efface le canevas pour redessiner à chaque frame
                    done = game.play(this); // Exécute le jeu et met à jour l'état
                    this.score = game.getScore(); // Récupère le score actuel
                    this.refreshScore(); // Met à jour l'affichage du score
                    lastChrono = chrono;
                }
            }
            if (!done)
                requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }
}
