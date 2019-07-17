export class Vector {
    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }

    readonly x: number;
    readonly y: number;

    add(other:Vector) {
        return Vector.add(this, other);
    }

    static add(a: Vector, b: Vector) {
        return new Vector(a.x  + b.x, a.y + b.y);
    }
}