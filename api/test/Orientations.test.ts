import assert from 'assert';
import { Orientations } from '../src/robotics/Orientation';

describe('Orientations', () => {
    it('should turn left correctly', () => {
        assert.equal(Orientations.North.left(), Orientations.West);
        assert.equal(Orientations.West.left(), Orientations.South);
        assert.equal(Orientations.South.left(), Orientations.East);
        assert.equal(Orientations.East.left(), Orientations.North);
    });

    it('should turn right correctly', () => {
        assert.equal(Orientations.North.right(), Orientations.East);
        assert.equal(Orientations.East.right(), Orientations.South);
        assert.equal(Orientations.South.right(), Orientations.West);
        assert.equal(Orientations.West.right(), Orientations.North);
    });

    it('should be able to do a full rotation', () => {
        assert.equal(Orientations.North.left().left().left().left(), Orientations.North);
        assert.equal(Orientations.North.right().right().right().right(), Orientations.North);
    })
})