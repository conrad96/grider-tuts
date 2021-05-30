const input = document.querySelector('#add-item');
const items = document.querySelector('#items-list');

input.addEventListener('keypress', function(evt){
    //Enter key press and add item to list
    if(evt.key == 'Enter')
    {
        if(!this.value) return; //falsy if input empty

        const newItem = document.createElement('li');
        newItem.innerHTML = this.value 
        items.appendChild(newItem);
        //reset input field
        this.value = '';
    }
})