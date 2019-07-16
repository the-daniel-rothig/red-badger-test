import { Robot } from './Robot';
import { Orientations, Orientation } from './Orientation';
import { Vector } from './Vector';

export class Grid {
    minX : number = 0;
    maxX : number = 0;
    
    minY : number = 0;
    maxY : number = 0;

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

    addCliff(robot: Robot) : void {
        // beware, mutability!
        this.knownCliffs.push(robot);
    }

    isKnownCliff(robot: Robot) : boolean {
        return this.knownCliffs.filter(cliff => 
            cliff.position.x === robot.position.x &&
            cliff.position.y === robot.position.y &&
            cliff.orientation === robot.orientation
        ).length > 0;
    }
}