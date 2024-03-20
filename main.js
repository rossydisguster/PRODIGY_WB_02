
    let timer;
    let isRunning = false;
    let seconds = 0, minutes = 0, hours = 0;

    function startStop() {
        if (isRunning) {
            clearInterval(timer);
            document.getElementById('startStopButton').innerText = 'Start';
        } else {
            timer = setInterval(updateTimer, 1000);
            document.getElementById('startStopButton').innerText = 'Stop';
        }
        isRunning = !isRunning;
    }

    function reset() {
        clearInterval(timer);
        isRunning = false;
        seconds = 0;
        minutes = 0;
        hours = 0;
        updateDisplay();
        document.getElementById('startStopButton').innerText = 'Start';
    }

    function updateTimer() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        updateDisplay();
    }

    function updateDisplay() {
        const formattedTime = padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(seconds);
        document.getElementById('timer').innerText = formattedTime;
    }

    function padNumber(number) {
        return number < 10 ? '0' + number : number;
    }
