module.exports = (array, direction, number) => {
  if (array.length === 0) {
    return array;
  }

  const moves = number % array.length;

  if (moves === 0) {
    return array;
  }

  const newArray = [];
  const divider = direction === 'left' ? moves : array.length - moves;

  for (let i = divider; i < array.length; i++) {
    newArray.push(array[i]);
  }

  for (let i = 0; i < divider; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}
