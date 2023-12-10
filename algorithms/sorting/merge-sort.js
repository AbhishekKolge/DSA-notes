const numbers = [99, 44, 6, 2, 1, 5, 63];

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (arr) => {
  const result = structuredClone(arr);
  if (result.length === 1) {
    return result;
  }

  const middle = Math.floor(result.length / 2);
  const left = result.slice(0, middle);
  const right = result.splice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(numbers));
console.log(numbers);
