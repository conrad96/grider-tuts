//spread opearator to create new array from existing array

const colors = ['red', 'white', 'yellow', 'black'];
const fruits = ['mango', 'apple', 'orange', 'grape']

const combine = [...colors, ...fruits]

console.log(combine);

//use spread to spli string
const str = 'abcdefgh';
const split = [...str];

console.log(split);