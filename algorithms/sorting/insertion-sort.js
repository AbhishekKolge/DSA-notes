const numbers = [44, 6, 99, 2];

const insertionSort = (arr) => {
  const result = structuredClone(arr);
  const length = result.length;

  for (let i = 0; i < length; i++) {
    if (result[i] < result[0]) {
      result.unshift(result.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (result[i] > result[j - 1] && result[i] < result[j]) {
          result.splice(j, 0, result.splice(i, 1)[0]);
        }
      }
    }
  }

  return result;
};

console.log(insertionSort(numbers));
console.log(numbers);
