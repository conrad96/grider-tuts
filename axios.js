const axios = require('axios');

// axios.get('https://swapi.dev/api/planets'). 
// then((response)=> {
//     let planets = response.data.results;
    
//     for(let planet of planets)
//     {
//         console.log(planet.name);
//     }
// })

//Axios chaining

showPlanets = (response) => {
    let data = response.data.results;
    let next = response.data.next;

    for(let planet of data)
    {
        console.log(planet.name);
    }

    return fetchNext(next);
}

fetchNext = (url) => {
    return axios.get(url);
}

axios.get('https://swapi.dev/api/planets').
then(showPlanets).
then(showPlanets)