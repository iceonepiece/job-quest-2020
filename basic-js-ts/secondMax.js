module.exports = (array) => {
  if (array.length === 0) {
    throw new Error('Error!');
  }

  let firstMax = array[0];
  let secondMax = -Infinity;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > firstMax) {
      secondMax = firstMax;
      firstMax = array[i];
    } else if (array[i] < firstMax && array[i] > secondMax) {
      secondMax = array[i];
    }
  }

  return secondMax != -Infinity ? secondMax : firstMax;
}
