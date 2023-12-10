const letters = ['x', 'a', 'j', 'o', 'd', 'b'];
const numbers = [4, 1, 64, 32, 22, 47, 80];
const words = ['único', 'árbol', 'cosas', 'fútbol'];

console.log(letters.sort());
console.log(numbers.sort());
// it takes each number as string and compare character code at first index. '64'.charCodeAt(0) --> 54
console.log(words.sort());
// compare character code at first index for every word.

//solution
console.log(
  numbers.sort((a, b) => {
    return a - b;
  })
);
console.log(
  words.sort((a, b) => {
    return a.localeCompare(b);
  })
);
