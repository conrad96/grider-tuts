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