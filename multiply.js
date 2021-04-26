// function multiply(a, b)
// {
//     if(typeof b === 'undefined') b = 1;

//     return a * b;
// }

function multiply(a = 1, b = 1)
{    
    return a * b;
}

var result = multiply(5, 5);

console.log(result);