let form = document.querySelector('form');
let input = document.querySelector('#message');
let msgOut = document.querySelector('#msg-out');

form.addEventListener('submit', (evt)=> {
    evt.preventDefault();    

    let encrypt = btoa(input.value);
    
    msgOut.value = `${window.location}#${encrypt}`;

    msgOut.select();

    document.querySelector('#link-output').classList.remove('hide');
})