import { Game } from "./Game.js";

export class Display {
    private ctx: CanvasRenderingContext2D | null;
    private scale: number;
    public speed: number;
    public score: number = 0;

    constructor(width: number, height: number, scale: number = 10, speed: number = 100) {
        this.scale = scale;
        this.speed = speed;
        const canvas = document.createElement('canvas');
        canvas.width = width * this.scale;
        canvas.height = height * this.scale;
        this.ctx = canvas.getContext('2d');
        const display: HTMLElement | null = document.getElementById("display");
        if (display != null) display.appendChild(canvas);
    }

    public drawRectangle(x: number, y: number, color: string): void {
        if (this.ctx != null) {
            this.ctx.beginPath();
            this.ctx.fillStyle = color;
            this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
        }
    }

    public clear(): void {
        if (this.ctx != null) {
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        }
    }

    public refreshScore(): void {
        const scoreElement: HTMLElement | null = document.getElementById("score");
        if (scoreElement != null) scoreElement.innerHTML = this.score.toString();
    }

    public play(game: Game): void {
        let lastChrono: number;
        let done: boolean = false;
        const loop = (chrono: number) => {
            if (!lastChrono) lastChrono = chrono;
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
            if (!done) requestAnimationFrame(loop);
        };
    
        requestAnimationFrame(loop);
    }
    
}
