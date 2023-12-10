//O(2^n)
const fibonacciRecursive = (n) => {
  if (n < 2) {
    return n;
  }

  if (n === 2) {
    return 1;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

//o(n)
const fibonacciMaster = () => {
  const cache = {};

  const memoizedFibonacciRecursive = (n) => {
    if (n in cache) {
      return cache[n];
    }

    if (n < 2) {
      cache[n] = n;
      return n;
    }

    if (n === 2) {
      cache[n] = 1;
      return 1;
    }

    cache[n] =
      memoizedFibonacciRecursive(n - 1) + memoizedFibonacciRecursive(n - 2);

    return cache[n];
  };

  return memoizedFibonacciRecursive;
};

//O(n)
const fibonacciIterative = (n) => {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
};

fibonacciRecursive(43);
fibonacciIterative(43);
const memoizedFibonacciRecursive = fibonacciMaster();
memoizedFibonacciRecursive(100);
