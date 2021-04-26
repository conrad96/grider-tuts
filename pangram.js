function isPangram(sentence)
{
    let lowerCased = sentence.toLowerCase();

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for(let char of alphabet)
    {
        if(lowerCased.indexOf(char) === -1) return false;
    }

    return true;
}

let result = isPangram('the five boxingwizards jump quickly')
console.log(result);