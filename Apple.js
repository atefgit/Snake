import { Point } from "./Point.js";
export class Apple {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.position = this.generatePosition();
    }
    // Génère une nouvelle position pour la pomme
    generatePosition() {
        const x = Math.floor(Math.random() * this.width);
        const y = Math.floor(Math.random() * this.height);
        this.position = new Point(x, y);
        return this.position;
    }
}
