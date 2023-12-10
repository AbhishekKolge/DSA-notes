const numbers = [99, 44, 6, 2, 100, 1];

const bubbleSort = (arr) => {
  const result = structuredClone(arr);
  const length = result.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const pointer1 = result[j];
      const pointer2 = result[j + 1];

      if (pointer1 > pointer2) {
        const temp = pointer1;

        result[j] = pointer2;
        result[j + 1] = temp;
      }
    }
  }

  return result;
};

console.log(bubbleSort(numbers));
console.log(numbers);
