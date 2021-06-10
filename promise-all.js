const axios = require('axios');

async function getPokemons()
{
    const first = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const second = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const third = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const fourth = axios.get('https://pokeapi.co/api/v2/pokemon/4');

    const pokemons = await Promise.all([first, second, third, fourth]);
    display(pokemons);
}

function display(pokemons)
{    
    for(let pokemon of pokemons)
    {
        console.log(pokemon.data.name);
    }
}

getPokemons();