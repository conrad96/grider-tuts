//APIKEY 7664928d
//http://www.omdbapi.com/

let fetchData = async(movie) => {

    let response = await axios.get('http://www.omdbapi.com/', {
        params: {
            s: movie,
            apikey: '7664928d'
        }
    });

    console.log(response.data);
}

let input = document.querySelector('input');

let onInput = evt => {
    fetchData(evt.target.value);
}

input.addEventListener('input', wait(onInput, 1000));