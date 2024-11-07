export class Point {
    constructor(public x: number, public y: number) {}

    // Vérifie si deux points sont au même endroit
    equals(other: Point): boolean {
        return this.x === other.x && this.y === other.y;
    }
}
