import { Point } from "./Point.js";

export class Snake {
    public body: Point[];
    private direction: Point;

    constructor(startPosition: Point, private width: number, private height: number) {
        this.body = [startPosition];
        this.direction = new Point(1, 0); // Initialement, le serpent se déplace vers la droite
    }

    // Déplace le serpent dans la direction actuelle
    move(): void {
        const head = this.getHead();
        const newHead = new Point(head.x + this.direction.x, head.y + this.direction.y);
        this.body.unshift(newHead); // Ajoute la nouvelle tête
        this.body.pop(); // Retire la queue
    }
    

    // Vérifie si le serpent a mangé la pomme
    eatApple(): void {
        const lastSegment = this.body[this.body.length - 1];
        this.body.push(new Point(lastSegment.x, lastSegment.y));
    }

    // Détecte les collisions avec le mur ou le propre corps du serpent
    isCollision(): boolean {
        const [head, ...body] = this.body;
        return (
            head.x < 0 || head.y < 0 ||
            head.x >= this.width || head.y >= this.height ||
            body.some(segment => segment.equals(head))
        );
    }

    // Change la direction du serpent
    setDirection(newDirection: Point): void {
        if (this.direction.x !== -newDirection.x || this.direction.y !== -newDirection.y) {
            this.direction = newDirection;
        }
    }

    getHead(): Point {
        return this.body[0];
    }
}
