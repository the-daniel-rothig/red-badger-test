import { Grid } from "../src/robotics/Grid";
import { GridParser } from '../src/robotics/GridParser';
import assert = require('assert');
import { Robot } from '../src/robotics/Robot';
import { Orientations } from '../src/robotics/Orientation';
import { Vector } from '../src/robotics/Vector';

describe("GridParser", () => {

    const sampleInput = `5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL`;

    it("should create a grid from the first row", () => {
        const grid = new GridParser("5 3").getGrid();
        assert.deepEqual(grid, new Grid(5,3));
    });

    it("should create a robot with an orientation", () => {
        const input = `5 3
1 1 E
`;
        const robot = new GridParser(input).getRobots().next().value;
        assert.deepEqual(robot, new Robot(new Vector(1,1), Orientations.East, new Grid(5,3)));    
    })

    it("should process a robot along its programme", () => {
        const input = `5 3
1 1 E
RFRFRF`;

        const robot = new GridParser(input).getRobots().next().value;        
        assert.deepEqual(robot, new Robot(new Vector(0,1), Orientations.North, new Grid(5,3)));    
        
    });

    it("should process multiple robots: ", () => {
        const input = `5 3
1 1 E

1 1 E

1 1 E
`;
        const robots = Array.from(new GridParser(input).getRobots());
        assert.equal(robots.length, 3);
    });
})