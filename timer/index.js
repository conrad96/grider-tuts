class Timer
{
    constructor(durationInput, startButton, pauseButton, callbacks)
    {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);

        //callbacks
        if(callbacks)
        {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }
    }

    start = () => {
        this.onStart(this.timeRemaining);

        this.tick();
        this.interval = setInterval(this.tick, 50);
    }

    tick = () => {
        let countdown = this.timeRemaining;

        if(this.timeRemaining > 0)
        {
            this.onTick(this.timeRemaining);
            this.timeRemaining = countdown - 0.05;
        }else {
            //completed
            this.onComplete();
            this.pause();
        }
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
        this.durationInput.value = time.toFixed(2);
    }
}

let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');
let duration = document.querySelector('#duration');

//DOM clock
let circle = document.querySelector('circle');
let radius = circle.getAttribute('r');
let perimeter = 2 * Math.PI * radius;

let durationT = 0;

const obj = new Timer(duration, startBtn, pauseBtn, {
 onStart (totalDuration) {
   durationT = totalDuration;
},
 onTick(timeRemaining){
    //make offset complete to end of circle        
    let timeDiff = durationT - timeRemaining;
    let offset = perimeter * timeRemaining / timeDiff ;
    console.log(offset);
    circle.setAttribute('stroke-dashoffset', offset);
 },
  onComplete(){
    console.log('completed'); 
 }
});