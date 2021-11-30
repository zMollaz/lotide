const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('return an empty array for an array that has less than 3 numbers' , () => {
    assert.deepEqual((middle([1, 2])), []);
  });
  it('return [2] for [1, 2, 3]' , () => {
    assert.deepEqual((middle([1, 2, 3])), [2]);
  });
  it('return [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual((middle([1, 2, 3, 4])), [2, 3]);
  });
});