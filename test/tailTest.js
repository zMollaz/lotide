const assert = require('chai').assert;
const tail = require('../tail');
const words = ["Hello", "Lighthouse", "Labs"];

describe('#tail',() => {
  it('return an empty array if input is an empty array []', () => {
    assert.deepEqual(tail([]), []);
  });
  it('return ["Lighthouse", "Labs"] as the modified array', () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  it('return 2 for the length of modified array', () => {
    assert.deepEqual(tail(words).length, 2);
  });
  it('return Lighthouse for index 0 of modified array', () => {
    assert.deepEqual(tail(words)[0], "Lighthouse");
  });
});