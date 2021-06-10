class Timer
{
    constructor(durationInput, startButton, pauseButton)
    {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    }

    tick = () => {
        let countdown = this.timeRemaining;
        if(this.timeRemaining > 0) this.timeRemaining = countdown - 1;
    }

    pause = () => {
        clearInterval(this.interval);
    }

    //use setters and getters
    get timeRemaining()
    {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time)
    {
        this.durationInput.value = time;
    }
}

let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');
let duration = document.querySelector('#duration');

const obj = new Timer(duration, startBtn, pauseBtn);