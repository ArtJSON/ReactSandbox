// /Napisz algorytm, sortujący tablice obiektów po różnych kluczach. Stopnie ważności kluczy: A,B,C
// Przykład #1: Da wynik[{a:0, b:10, c:8}, {a:1, b:10, c:8}, {a:2, b:1, c:5},  {a:2, b:3, c:4}, {a:2, b:3, c:5}]

const keyImportance = ["a", "b", "c", "d"];

let sortedArr = [
  { a: 2, b: 3, c: 5, d: 4 },
  { a: 1, b: 10, c: 8, d: 6 },
  { a: 2, b: 3, c: 5, d: 7 },
  { a: 2, b: 1, c: 5, d: 9 },
  { a: 0, b: 10, c: 8, d: 1 },
];

keyImportance.forEach((key, index) => {
  if (!index) {
    sortedArr.sort((obj1, obj2) => obj1[key] - obj2[key]);
  } else {
    sortedArr.sort((obj1, obj2) =>
      obj1[keyImportance[index - 1]] === obj2[keyImportance[index - 1]]
        ? obj1[key] - obj2[key]
        : 0
    );
  }
});

console.log(sortedArr);
