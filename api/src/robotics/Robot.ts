import { Vector } from './Vector';
import { Grid } from './Grid';
import { Orientation, Orientations } from './Orientation';

export class Robot {
    readonly position : Vector;
    readonly orientation : Orientation;
    readonly isLost : boolean;

    readonly grid : Grid;

    constructor(position : Vector, orientation: Orientation, grid : Grid, isLost:boolean = false) {
        this.position = position;        
        this.orientation = orientation;
        this.grid = grid;
        this.isLost = isLost
    }
    
    stepForward() : Robot {
        if (this.isLost || this.grid.isKnownCliff(this)) {
            return this;
        }

        const newPosition = this.position.add(this.orientation.translation);

        if (newPosition.x < this.grid.minX || newPosition.x > this.grid.maxX || newPosition.y < this.grid.minY || newPosition.y > this.grid.maxY) {
            return new Robot(this.position, this.orientation, this.grid.withCliff(this), true)
        } else {
            return new Robot(newPosition, this.orientation, this.grid);
        }
    }

    turnLeft() : Robot {
        return this.isLost ? this : new Robot(this.position, this.orientation.left(), this.grid);
    }

    turnRight() : Robot {
        return this.isLost ? this : new Robot(this.position, this.orientation.right(), this.grid);
    }
}