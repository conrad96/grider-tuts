const fetch = require('node-fetch');

fetch('https://swapi.dev/api/planets').then((response)=> {
    //throw error
    if(response.status != 200) throw new Error(`Status code: ${response.status}`);

    response.json().then((data)=> {
        for(let planet of data.results)
        {
            console.log(planet.name);
        }
    })
}).catch((error)=> {
    console.log(error);
})