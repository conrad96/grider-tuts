//APIKEY 7664928d
//http://www.omdbapi.com/

let fetchData = async(movie) => {

    let response = await axios.get('http://www.omdbapi.com/', {
        params: {
            s: movie,
            apikey: '7664928d'
        }
    });

    return response.data.Search;
}

let input = document.querySelector('input');

let onInput = async evt => {
    const movies = await fetchData(evt.target.value);
    
    for(let movie of movies)
    {
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="${movie.Poster}" style="width: 300px; height: 250px;" />
        <h1>${movie.Title}</h1>
        <h3>${movie.Year}</h3>
        `;

        document.querySelector('#movie-canvas').appendChild(div);
    }
}

input.addEventListener('input', wait(onInput, 1000));