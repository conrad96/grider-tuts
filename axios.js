const axios = require('axios');

axios.get('https://swapi.dev/api/planets'). 
then((response)=> {
    let planets = response.data.results;
    
    for(let planet of planets)
    {
        console.log(planet.name);
    }
})