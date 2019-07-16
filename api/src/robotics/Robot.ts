import { Vector } from './Vector';
import { Grid } from './Grid';
import { Orientation, Orientations } from './Orientation';

export class Robot {
    position : Vector;
    orientation : Orientation;

    private grid : Grid;

    constructor(x : number, y : number, orientation: Orientation, grid : Grid) {
        this.position = new Vector(x,y);        
        this.orientation = orientation;
        this.grid = grid;
    }
}