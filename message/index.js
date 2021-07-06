let form = document.querySelector('form');
let input = document.querySelector('#message');
let msgOut = document.querySelector('#msg-out');
const {hash} = window.location;

const message = atob(hash.replace('#', ''));

if(message)
{
    document.querySelector('#link-output').classList.add('hide');
    document.querySelector('#form-panel').classList.add('hide');
    document.querySelector('#decrypt-output').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

form.addEventListener('submit', (evt)=> {
    evt.preventDefault();    

    let encrypt = btoa(input.value);
    
    msgOut.value = `${window.location}#${encrypt}`;

    msgOut.select();

    document.querySelector('#link-output').classList.remove('hide');
    document.querySelector('#form-panel').classList.add('hide');
    console.log(window.location);
})
