function giveMeFour(a, b, c, d)
{
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

//let result = giveMeFour(2, 3, 4, 5);
const colors = ['red', 'white', 'blue', 'orange'];
//let result = giveMeFour(colors)
//use the spread to separate iterable as separate arguments
let result = giveMeFour(...colors)

