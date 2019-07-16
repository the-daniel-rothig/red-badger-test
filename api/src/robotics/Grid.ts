import { Robot } from './Robot';
import { Orientations } from './Orientation';

export class Grid {
    minX : number = 0;
    maxX : number = 0;
    
    minY : number = 0;
    maxY : number = 0;

    constructor(x:number, y:number) {
        if (x < 1 || y < 1) {
            throw "invalid grid"
        }

        this.maxX = x;
        this.maxY = y;
    }

    placeRobot(x: number, y:number) : Robot {
        return new Robot(x,y, Orientations.North, this);
    }
}