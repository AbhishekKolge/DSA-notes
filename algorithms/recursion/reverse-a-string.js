const reverseStringRecursive = (str) => {
  if (str === '') {
    return '';
  }
  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
};

console.log(reverseStringRecursive('Hi, my name is Abhishek'));
