import { GridParser } from '../src/robotics/GridParser';
import { RobotPrinter } from '../src/robotics/RobotPrinter';
import assert = require('assert');
describe("GridParser + RobotPrinter integration", () => {
    const sampleInput = `5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL`;

    const expectedOutput = `1 1 E
3 3 N LOST
2 3 S`;

    it("should provide the correct output", () => {
        let output = RobotPrinter.getBulkString(Array.from(new GridParser(sampleInput).getRobots()));
        assert.equal(output, expectedOutput);
    })
})