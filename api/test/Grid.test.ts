import assert from "assert";
import { Grid } from '../src/robotics/Grid';


describe("Grid", () => {
    it("should be created with specified bounds", () => {
        let grid = new Grid(3,4);

        assert.equal(grid.minX, 0);
        assert.equal(grid.minY, 0);
        assert.equal(grid.maxX, 3);
        assert.equal(grid.maxY, 4);
    });

    it("should throw if one of the parameters 0 or less", () => {
        assert.throws(() => new Grid(0,1), "should thow when x = 0")
        assert.throws(() => new Grid(-1,1), "should thow when x = -1")
        assert.throws(() => new Grid(1,0), "should thow when y = 0")
        assert.throws(() => new Grid(1,-1), "should thow when y = -1")
    })

    it("should be able to place a robot", () => {
        let robot = new Grid(3,4).placeRobot(2,3);

        assert.equal(robot.position.x, 2);
        assert.equal(robot.position.y, 3);
    })
})