import { Grid } from "../src/robotics/Grid";
import assert from 'assert';
import { Vector } from '../src/robotics/Vector';
import { Orientations } from '../src/robotics/Orientation';
import { Robot } from 'src/robotics/Robot';

describe("Robot", () => {
    it("should be able to walk forward", () => {
        let robot = new Grid(5,5).placeRobot(1,1, Orientations.North).stepForward();
        assert.deepEqual(robot.position, new Vector(1,2));
    });

    it("should be able to turn left", () => {
        let robot = new Grid(5,5).placeRobot(1,1, Orientations.North).turnLeft();
        assert.deepEqual(robot.position, new Vector(1,1));
        assert.equal(robot.orientation, Orientations.West)
    });
    
    it("should be able to turn right", () => {
        let robot = new Grid(5,5).placeRobot(1,1, Orientations.North).turnRight();
        assert.deepEqual(robot.position, new Vector(1,1));
        assert.equal(robot.orientation, Orientations.East)
    });

    it("should be able to fall off the grid", () => {
        let robot = new Grid(5,5).placeRobot(1,5, Orientations.North).stepForward();
        assert.deepEqual(robot.position, new Vector(1,5));
        assert.equal(robot.isLost, true);
    })

    it("should move no further once lost", () => {
        let lostRobot = new Grid(5,5).placeRobot(1,5, Orientations.North).stepForward();

        let res = lostRobot.stepForward().stepForward().turnLeft().turnLeft().turnRight();
        
        assert.deepEqual(res, lostRobot);        
    })

    it("should ignore instructions to fall off a known gap", () => {
        const grid = new Grid(5,5);

        let lostRobot = grid.placeRobot(1,5, Orientations.North).stepForward();
        let savedRobot = grid.placeRobot(1,5, Orientations.North).stepForward();

        assert.deepEqual(savedRobot, grid.placeRobot(1,5, Orientations.North));
    })
})