const mergeSortedArrays = (arr1, arr2) => {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  let arrOneItem = arr1[i];
  let arrTwoItem = arr2[j];

  while (arrOneItem || arrTwoItem) {
    if (!arrTwoItem || arrOneItem < arrTwoItem) {
      mergedArr.push(arrOneItem);
      i++;
      arrOneItem = arr1[i];
    } else {
      mergedArr.push(arrTwoItem);
      j++;
      arrTwoItem = arr2[j];
    }
  }

  return mergedArr;
};

console.log(mergeSortedArrays([0, 3, 4, 30], [4, 6, 29]));
