import { Point } from "./Point.js";

export class Apple {
    public position: Point;

    constructor(private width: number, private height: number) {
        this.position = this.generatePosition();
    }

    // Génère une nouvelle position pour la pomme
    generatePosition(): Point {
        const x = Math.floor(Math.random() * this.width);
        const y = Math.floor(Math.random() * this.height);
        this.position = new Point(x, y);
        return this.position;
    }
}
