import { Vector } from './Vector';

export type Orientation = {
    readonly name: string;
    readonly translation: Vector;
    left(): Orientation;
    right(): Orientation;
}

export class Orientations {
    static North : Orientation = {
        name: "N",
        translation: new Vector(0,1),
        left: () => Orientations.West,
        right: () => Orientations.East
    }

    static East : Orientation = {
        name: "E",
        translation: new Vector(1, 0),
        left: () => Orientations.North,
        right: () => Orientations.South
    }

    static South : Orientation = {
        name: "S",
        translation: new Vector(0, -1),
        left: () => Orientations.East,
        right: () => Orientations.West
    }

    static West : Orientation = {
        name: "W",
        translation: new Vector(-1, 0),
        left: () => Orientations.South,
        right: () => Orientations.North
    }
}

