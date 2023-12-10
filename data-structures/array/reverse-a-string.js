const reverseString = (str) => {
  if (typeof str !== 'string') return;
  if (str.length < 2) return;

  return [...str].reverse().join('');
};

console.log(reverseString('Hi, my name is Abhishek'));
