class Timer {
	constructor(durationInput, startBtn, pauseBtn) {
		this.durationInput = durationInput;
		this.startBtn = startBtn;
		this.pauseBtn = pauseBtn;

		this.startBtn.addEventListener('click', this.start);
		this.pauseBtn.addEventListener('click', this.pause);
	}

	start = () => {
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	tick = () => {
		console.log('tick');
	};

	pause = () => {
		clearInterval(this.interval);
	};
}

const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

const timer = new Timer(durationInput, startBtn, pauseBtn);

//Test test test
