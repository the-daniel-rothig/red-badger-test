import { Vector } from './Vector';
import { Grid } from './Grid';

export class Robot {
    position : Vector;

    private grid : Grid;

    constructor(x : number, y : number, grid : Grid) {
        this.position = new Vector(x,y);        
        this.grid = grid;
    }
}