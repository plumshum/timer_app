document.querySelectorAll('.js-start-timer').forEach(function(timer) {
    timer.addEventListener('click', function() {
        let timeLeft = 10; // Set the initial time (in seconds)
        let timerDisplay = document.getElementById('timer');

        let timerInterval = setInterval(function() {
            timerDisplay.textContent = timeLeft;
            timeLeft -= 1;

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = 'Done!';
            }
        }, 1000);
    });
});
