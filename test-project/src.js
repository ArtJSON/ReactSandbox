const arr = [
  [3, 21, 37],
  [61, 79, 101, 120],
  [133, 149],
];

const isNumberInNumberOfArrays = (number, array) => {
  return array.flat().includes(number);
};

console.log(isNumberInNumberOfArrays(0, arr));
console.log(isNumberInNumberOfArrays(21, arr));
console.log(isNumberInNumberOfArrays(221, arr));
