import { Robot } from './Robot';
import { Orientations, Orientation } from './Orientation';
import { Vector } from './Vector';

export class Grid {
    readonly minX : number = 0;
    readonly maxX : number = 0;
    
    readonly minY : number = 0;
    readonly maxY : number = 0;

    private knownCliffs : Robot[] = [];

    constructor(x:number, y:number) {
        if (x < 1 || y < 1) {
            throw "invalid grid"
        }

        this.maxX = x;
        this.maxY = y;
    }

    placeRobot(x: number, y:number, orientation: Orientation) : Robot {
        return new Robot(new Vector(x,y), orientation, this);
    }

    withCliff(robot: Robot) : Grid {
        const grid = new Grid(this.maxX, this.maxY)
        grid.knownCliffs = Array.from(this.knownCliffs);
        grid.knownCliffs.push(robot);
        return grid;
    }

    isKnownCliff(robot: Robot) : boolean {
        return this.knownCliffs.filter(cliff => 
            cliff.position.x === robot.position.x &&
            cliff.position.y === robot.position.y &&
            cliff.orientation === robot.orientation
        ).length > 0;
    }
}