const colors = [
    'red', 'yellow', 'blue', 'black', 'white', 'indigo', 'violet', 'pink',
    'maroon', 'purple'
];

const mainBox = document.querySelector('#boxes');

const changeColor = function(){
    const title = document.querySelector('h1');
    title.style.color = this.style.backgroundColor;
}

//create element divs to show the colors
for(let color of colors)
{
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = color;
    mainBox.appendChild(box);

    //add Events
    box.addEventListener('click', changeColor)
}