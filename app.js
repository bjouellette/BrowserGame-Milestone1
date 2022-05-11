var timeremaining = 10;
var triviaTimer = setInterval(function () {
    if (timeremaining <= 0) {
        clearInterval(triviaTimer);
        document.getElementById("countdown").innerHTML = "Time's Up";
    } else {
        document.getElementById("countdown").innerHTML = timeremaining;
    }
    timeremaining -= 1;
}, 1000);