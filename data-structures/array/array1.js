const strings = ['a', 'b', 'c', 'd'];

strings[1]; //O(1)
strings.push('e'); //O(1) or O(n)
strings.pop(); //O(1)
strings.unshift('0'); //O(n)
strings.shift(); //O(n)
strings.splice(1, 0, 'alien'); //O(n)

console.log(strings);

//in case of push it can be O(n) sometimes because javascript has dynamic array only. lets say we have array of 4 elements and we push 1 more, javascript will rebuild the array at new location with doubled the memory hence O(n). once it is rebuild we can expect that the push operation will be O(1) for next 4 pushed elements.
