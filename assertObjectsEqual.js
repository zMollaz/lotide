const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};
const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let key of obj1) {
    let val1 = object1[key]; let val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      return eqArrays(val1,val2);
    }
    if (val1 !== val2) {
      return false;
    }
  } return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });