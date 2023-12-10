const addTo80 = (n) => {
  return n + 80;
};

const memoizedAddTo80 = () => {
  const cache = {};

  return (n) => {
    if (!(n in cache)) {
      console.log('not cached');
      cache[n] = n + 80;
    }
    return cache[n];
  };
};

const memoized = memoizedAddTo80();
console.log(addTo80(5));
console.log(addTo80(5));
console.log(memoized(6));
console.log(memoized(6));
