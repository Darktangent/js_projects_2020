class Timer {
	constructor(durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}
		this.pauseButton.addEventListener('click', this.pause);
		this.startButton.addEventListener('click', this.start);
	}

	start = () => {
		if (this.onStart) {
			this.onStart(this.timeRemaining);
		}
		this.tick();
		this.interval = setInterval(this.tick, 20);
	};
	tick = () => {
		// const timeRemaining = this.timeRemaining;
		if (this.timeRemaining <= 0) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaining = this.timeRemaining - 0.02;
			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}
	};
	// getTime(){
	//   return parseFloat(this.durationInput.value);
	// }
	// setTime(time){
	//   this.durationInput.value=time
	// }
	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}
	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2);
	}
	pause = () => {
		clearInterval(this.interval);
	};
}
