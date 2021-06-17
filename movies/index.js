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

let root = document.querySelector('#auto-complete');

root.innerHTML = `
<label>Search Movie</label><p />
<input type="text" name="search" />
<div class="dropdown">
    <div class="dropdown-menu">
        <div class="dropdown-content results">            
        </div>    
    </div>
</div>
`;

let input = document.querySelector('input');
let dropdown = document.querySelector('.dropdown');
let results = document.querySelector('.results');

let onInput = async evt => {
    const movies = await fetchData(evt.target.value);

    dropdown.classList.add('is-active');

    for(let movie of movies)
    {
        const item = document.createElement('a');
        item.classList.add('dropdown-item');

        item.innerHTML = `
        <img src="${movie.Poster}" />
        ${movie.Title}`;

        results.appendChild(item);
    }
}

input.addEventListener('input', wait(onInput, 1000));