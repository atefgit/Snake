export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // Vérifie si deux points sont au même endroit
    equals(other) {
        return this.x === other.x && this.y === other.y;
    }
}
