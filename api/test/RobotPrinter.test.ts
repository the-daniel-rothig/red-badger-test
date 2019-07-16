import { Robot } from "../src/robotics/Robot";
import { Orientations } from '../src/robotics/Orientation';
import { Grid } from '../src/robotics/Grid';
import { Vector } from '../src/robotics/Vector';
import assert = require('assert');
import { RobotPrinter } from '../src/robotics/RobotPrinter';

describe('RobotPrinter', () => {
    it("should report position and orientation", () => {
        const robot = new Robot(new Vector(1,2), Orientations.West, new Grid(5,5));
        assert.equal(RobotPrinter.getPositionString(robot), "1 2 W");
    });

    it("should tell if a robot is lost", () => {
        const lostRobot = new Robot(new Vector(1,5), Orientations.North, new Grid(5,5)).stepForward();
        assert.equal(RobotPrinter.getPositionString(lostRobot), "1 5 N LOST")        
    });

    it("should work for bulk operations", () => {
        const expected = `1 2 W
1 2 W
1 2 W`;
        const output = RobotPrinter.getBulkString([
            new Robot(new Vector(1,2), Orientations.West, new Grid(5,5)),
            new Robot(new Vector(1,2), Orientations.West, new Grid(5,5)),
            new Robot(new Vector(1,2), Orientations.West, new Grid(5,5))
        ]);

        assert.equal(output, expected);
    });
})
