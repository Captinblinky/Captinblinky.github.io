function runTimer() {
    let hour = document.getElementById("hour").value;
    let min = document.getElementById("min").value;
    let sec = document.getElementById("sec").value;
    let timeRemaining = document.getElementById("timeRemaining");
    timeRemaining.innerHTML = "Time Remaining: " + hour + ":" + min + ":" + sec;
    if (!(+hour >= 0 && +hour <= 9999) || hour.length == 0 || (!(+min >= 0 && +min <= 59)) || min.length == 0 || !(+sec >= 0 && +sec <= 59) || sec.length == 0) {
        timeRemaining.innerHTML = "Invalid time!";
    } else {
        document.getElementById("start").disabled = true;
        setInterval(function() {
            timeRemaining.innerHTML = "Time Remaining: " + hour + ":" + min + ":" + sec;
            if (sec > 0) {
                sec--;
            } else if (sec < 1 && min > 0) {
                sec = 59; 
                min--;
            } 
        }, 1000);
    }
}