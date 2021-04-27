const words = ['Hello', 'random', 'literally', 'bollocks', 'mayonaise', 'sleep']

//invoke start to show wach word after 3 secs

const obj = {
    words: words,
    pick()
    {
        const idx = Math.floor(Math.random() * words.length);
        return words[idx];
    },
    start()
    {
        setInterval(()=> {
            console.log(this.pick());
        }, 3000)
    }
}

obj.start()