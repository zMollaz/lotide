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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

/*The middle function should return an array with only the middle element(s) of the provided array.
This means that the length of the returned elements could vary.
For arrays with one or two elements, there is no middle. Return an empty array.
For arrays with odd number of elements, an array containing a single middle element should be returned.
For arrays with an even number of elements, an array containing the two elements in the middle should be returned*/

const middle = function(arr) {
  let positionOfElement = 0;
  if (arr.length < 3) {
    return [];
  }
  if (arr.length % 2 === 0) {
    positionOfElement = (arr.length / 2) - 1;
    return arr.slice(positionOfElement,positionOfElement + 2);
  } else if (arr.length % 2 !== 0) {
    positionOfElement = (arr.length / 2);
    return arr.slice(positionOfElement,positionOfElement + 1);
  }
};
//Test codes
console.log(middle([1, 2, 3, 4, 5]), typeof result);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);