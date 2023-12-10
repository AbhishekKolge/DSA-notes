const numbers = [6, 2, 1, 5, -1];

const selectionSort = (arr) => {
  const result = structuredClone(arr);
  const length = result.length;

  for (let i = 0; i < length; i++) {
    let smallest = i;
    const temp = result[i];

    for (let j = i + 1; j < length; j++) {
      if (result[j] < result[smallest]) {
        smallest = j;
      }
    }

    result[i] = result[smallest];
    result[smallest] = temp;
  }

  return result;
};

console.log(selectionSort(numbers));
console.log(numbers);
