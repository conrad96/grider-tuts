const add = (x , y) => { return x + y}
const multiply = (x, y) => { return x * y}
const divide = (x, y) => { return x / y}

const methods = {add, multiply, divide}

console.log(methods.add(5, 6));
console.log(methods.multiply(5, 6));
console.log(methods.divide(15, 3));