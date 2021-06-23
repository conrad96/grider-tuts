//APIKEY 7664928d
//http://www.omdbapi.com/

let fetchData = async(movie) => {

    let response = await axios.get('http://www.omdbapi.com/', {
        params: {
            s: movie,
            apikey: '7664928d'
        }
    });
    
    if(response.data.Error){
        response.data.Search = [];
        response.data.totalResults = 0;
    }

    return {data: response.data.Search, results: response.data.totalResults};
}

let root = document.querySelector('#auto-complete');

root.innerHTML = `
<label for="movie">Search Movie&nbsp;&nbsp; <div id="search-results"></div></label><p />
<input id="movie" type="text" name="search" />
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
let totalResultsEle = document.querySelector('#search-results');
let canvas = document.querySelector('#movie-canvas');
let total = 0;

let onInput = async evt => {
    //clear results div
    results.innerHTML = '';
    totalResultsEle.innerHTML = '';

    const searchResults = await fetchData(evt.target.value);
    const movies = searchResults.data;
    total = searchResults.results;

    //if no movies close dropdown
    if(!movies.length)
    {
        dropdown.classList.remove('is-active');
        return false;
    }
   
    totalResultsEle.innerHTML = `${total} results`;

    dropdown.classList.add('is-active');

    for(let movie of movies)
    {
        const item = document.createElement('a');
        item.classList.add('dropdown-item');

        let poster = movie.Poster == 'N/A'? '' : movie.Poster;

        item.innerHTML = `
        <img src="${poster}" />
        ${movie.Title}`;

        //set movie title in input field and close dropdown
        item.addEventListener('click', ()=> {
            dropdown.classList.remove('is-active');
            input.value = movie.Title;
            results.innerHTML = '';
            movieSelector(movie);
        })

        results.appendChild(item);
    }
}

input.addEventListener('input', wait(onInput, 1000));

//hide dropdown isf user clicks outside dropdown
document.addEventListener('click', evt=> {
    if(!root.contains(evt.target))
    {
        dropdown.classList.remove('is-active');
    }
})

let movieSelector = async movie =>
{   
    let resp = await axios.get('http://www.omdbapi.com/', {
        params: {
            i: movie.imdbID,
            apikey: '7664928d'
        }
    });

   canvas.innerHTML = movieDetail(resp.data);
}

let movieDetail = movieObj => {
    console.log(movieObj); 

    return `
    <article class="media">
        <figure class="media-left">
            <p class="image">
                <img src="${movieObj.Poster == 'N/A'? '' : movieObj.Poster}" />
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <h1>${movieObj.Title}</h1>
                <h4>${movieObj.Genre}</h4>
                <p />${movieObj.Plot}
            </div>
        </div>        
    </article>
    <article class="notification is-primary">
        <p class="title">${movieObj.Awards}</p>
        <p class="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieObj.BoxOffice}</p>
        <p class="subtitle">BoxOffice</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieObj.Metascore}</p>
        <p class="subtitle">MetaScore</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieObj.imdbVotes}</p>
        <p class="subtitle">imdbVotes</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieObj.imdbRating}</p>
        <p class="subtitle">imdbRating</p>
    </article>
    `;
}