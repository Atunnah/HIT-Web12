var currentDay = new Date();
var targetDay = new Date("August 18, " + (currentDay.getFullYear()) + " 00:00:00");

var timeRemaining = targetDay - currentDay;

function updateCountdown() {
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d : " + hours + "h : " + mins + "m : " + secs + "s";

    timeRemaining -= 1000;

    if(timeRemaining < 0) {
        document.getElementById("countdown").innerHTML = "Happy Birth Day";
        clearInterval(countdownInterval);
    }
}

var countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();