import assert from 'assert';
import { Vector } from '../src/robotics/Vector';

describe('Vector', () => {
    it('should initialise its properties', () => {
        const v = new Vector(1,2);
        assert.equal(v.x, 1);
        assert.equal(v.y, 2);
    })

    it('should be able to add', () => {
        const v1 = new Vector(1,2);
        const v2 = new Vector(3,4);
        const res = v1.add(v2);

        assert.equal(res.x, 4);
        assert.equal(res.y, 6)
    })
})