async function add(x, y)
{
    if(typeof x !== 'number' || typeof y !== 'number') throw 'x and y must be numbers';
    
    return x + y;
}

// let value = add(10, '5');
// console.log(value);

add(10, '5').then((value)=> {
    console.log('SUM: '+ value);
}).catch((error)=> {
    console.log('Error: '+ error);
})