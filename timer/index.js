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
        let countdown = parseInt(this.durationInput.value);        
        if(this.durationInput.value > 0) this.durationInput.value = countdown - 1;
    }

    pause = () => {
        clearInterval(this.interval);
    }
}

let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');
let duration = document.querySelector('#duration');

const obj = new Timer(duration, startBtn, pauseBtn);