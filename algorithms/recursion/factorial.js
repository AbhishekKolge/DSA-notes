const findFactorialRecursive = (number) => {
  if (number <= 1) {
    return 1;
  }

  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
};

const findFactorialIterative = (number) => {
  if (number <= 1) {
    return 1;
  }

  if (number === 2) {
    return 2;
  }

  let answer = 1;

  for (let i = 2; i <= number; i++) {
    answer *= i;
  }

  return answer;
};

findFactorialRecursive(5);
findFactorialIterative(5);
