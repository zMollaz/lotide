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

module.exports = middle;