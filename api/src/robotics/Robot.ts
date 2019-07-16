import { Vector } from './Vector';
import { Grid } from './Grid';
import { Orientation, Orientations } from './Orientation';

export class Robot {
    position : Vector;
    orientation : Orientation;
    isLost : boolean = false;

    private grid : Grid;

    constructor(position : Vector, orientation: Orientation, grid : Grid) {
        this.position = position;        
        this.orientation = orientation;
        this.grid = grid;
    }
    
    stepForward() : Robot {
        if (this.isLost || this.grid.isKnownCliff(this)) {
            return this;
        }

        const newPosition = this.position.add(this.orientation.translation);

        if (newPosition.x < this.grid.minX || newPosition.x > this.grid.maxX || newPosition.y < this.grid.minY || newPosition.y > this.grid.maxY) {
            this.grid.addCliff(this);
            const newRobot = new Robot(this.position, this.orientation, this.grid)
            newRobot.isLost = true;
            return newRobot;
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