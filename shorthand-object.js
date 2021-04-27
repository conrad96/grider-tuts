

const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const average = sum / arr.length;
    
    const result = 
    {
        max, min, sum, average
    }

    return result;
}

const arr = [12, 15, 20, 25, 21, 34, 89, 45, 90, 78, 56]
let results = getStats(arr);
console.log(results);

//add props to object

const team = {
    role: 'admin',
    name: 'conrad'
}
console.log(team);
const addProp = (obj, key, value) => {    
    const newObj = {...obj, [key]: value}

    return newObj;
};

console.log(addProp(team, 'uname', 'conradBlaster'));