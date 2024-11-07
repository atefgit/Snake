import { Display } from "./Display.js";
import { Snake } from "./Snake.js";
import { Apple } from "./Apple.js";
import { Point } from "./Point.js";

export class Game {
    private snake: Snake;
    private apple: Apple;
    private score: number = 0;

    constructor(width: number, height: number) {
        this.snake = new Snake(new Point(10, 10), width, height);
        this.apple = new Apple(width, height);
    }

    public getScore(): number {
        return this.score;
    }

    public play(display: Display): boolean {
        this.snake.move();
        
        if (this.snake.isCollision()) {
            console.log("Game Over!");
            return true;
        }

        if (this.snake.getHead().equals(this.apple.position)) {
            this.snake.eatApple();
            this.apple.generatePosition();
            this.score += 10;
        }

        this.draw(display);
        return false;
    }

    private draw(display: Display) {
        display.clear();
        display.drawRectangle(this.apple.position.x, this.apple.position.y, "red"); // Dessine la pomme
        this.snake.body.forEach(segment => display.drawRectangle(segment.x, segment.y, "green")); // Dessine le serpent
        display.refreshScore();
    }

    public setDirection(x: number, y: number): void {
        this.snake.setDirection(new Point(x, y));
    }
    
}
