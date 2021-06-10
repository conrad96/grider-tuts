class Timer
{
    constructor(durationInput, startButton, pauseButton)
    {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }

    start()
    {
        console.log('started');
    }
}

let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');

const obj = new Timer(30, startBtn, pauseBtn);