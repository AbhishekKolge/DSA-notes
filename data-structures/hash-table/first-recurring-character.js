const array1 = [2, 5, 1, 5, 2, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5];

const findRecurringNumber = (arr) => {
  if (arr.length < 2) {
    return undefined;
  }

  if (arr.length === 2 && arr[0] === arr[1]) {
    return arr[0];
  }

  const arrayHashTable = new Map();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arrayHashTable.has(element)) {
      return element;
    }
    arrayHashTable.set(element, i);
  }

  return undefined;
};

const findRecurringNumber2 = (arr) => {
  let result = undefined;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    const element = arr[i];
    for (let j = i + 1; j < length; j++) {
      const element2 = arr[j];
      if (element === element2) {
        result = element;
        length = j + 1;
      }
    }
  }
  return result;
};

findRecurringNumber(array1);
findRecurringNumber2(array1);
