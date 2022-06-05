//Pangram to zdanie, które przynajmniej raz zawiera każdą literę alfabetu. Na przykład zdanie "The quick brown fox jumps over the lazy dog" jest pangramem, ponieważ przynajmniej raz używa liter A-Z (wielkość liter nie ma znaczenia). Alfabet składa się z 26 liter (A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z).
//Stwórz funkcję, która sprawdza czy podany string jest pangramem.

const sentence = "The quick brown fox jumps over the lazy dog";

function checkPangram(sentence) {
  let set = new Set();

  for (let i = 0; i < sentence.length; i++) {
    if (/[a-zA-Z]/.test(sentence[i])) set.add(sentence[i].toUpperCase());
  }

  return set.size == 26;
}

// Otrzymasz tablicę n x n elementów (2-7). Ustal czy strzałka “>” “<” “^” “v”jest wycelowana w cel “x”.
// W tablicy będzie tylko jedna strzałka “>” i jeden cel “x”. Puste pola będą wypełnione spacją “ “.

// v ^

const array = [
  [" ", " ", " ", " "],
  [" ", "x", " ", " "],
  [" ", " ", " ", " "],
  [" ", "^", " ", " "],
];

for (let indexOfArr = 0; indexOfArr < array.length; indexOfArr++) {
  if (array[indexOfArr].indexOf(">") != -1) {
    console.log(
      array[indexOfArr].indexOf(">") < array[indexOfArr].indexOf("x")
    );
  }

  if (array[indexOfArr].indexOf("<") != -1) {
    console.log(
      array[indexOfArr].indexOf("<") > array[indexOfArr].indexOf("x")
    );
  }

  if (array[indexOfArr].indexOf("v") != -1) {
    const indexOfVArray = indexOfArr;
    const indexOfV = array[indexOfArr].indexOf("v");

    let xPosition = -1;

    for (let index = 0; index < array.length; index++) {
      if (
        array[index].indexOf("x") != -1 &&
        array[index].indexOf("x") == indexOfV
      ) {
        xPosition = index;
      }
    }

    console.log(xPosition != -1 && indexOfVArray < xPosition);
  }

  if (array[indexOfArr].indexOf("^") != -1) {
    const indexOfVArray = indexOfArr;
    const indexOfV = array[indexOfArr].indexOf("^");

    let xPosition = -1;

    for (let index = 0; index < array.length; index++) {
      if (
        array[index].indexOf("x") != -1 &&
        array[index].indexOf("x") == indexOfV
      ) {
        xPosition = index;
      }
    }

    console.log(xPosition != -1 && indexOfVArray > xPosition);
  }
}
