import { Snake } from "./Snake.js";
import { Apple } from "./Apple.js";
import { Point } from "./Point.js";
export class Game {
    constructor(width, height) {
        this.score = 0;
        this.snake = new Snake(new Point(10, 10), width, height);
        this.apple = new Apple(width, height);
    }
    getScore() {
        return this.score;
    }
    play(display) {
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
    draw(display) {
        display.clear();
        display.drawRectangle(this.apple.position.x, this.apple.position.y, "red"); // Dessine la pomme
        this.snake.body.forEach(segment => display.drawRectangle(segment.x, segment.y, "green")); // Dessine le serpent
        display.refreshScore();
    }
    setDirection(x, y) {
        this.snake.setDirection(new Point(x, y));
    }
}
