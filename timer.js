function runTimer() {
    let hour = document.getElementById("hour").value;
    let min = document.getElementById("min").value;
    let sec = document.getElementById("sec").value;
    console.log(typeof hour);
    console.log(typeof min);
    console.log(typeof sec);
    let timeRemaining = document.getElementById("timeRemaining");
    if (!(+hour >= 0 && +hour <= 9999) || (!(+min >= 0 && +min <= 59)) || (!(+sec >= 0 && +sec <= 59))) {
        timeRemaining.innerHTML = "Invalid time!";
    } else {
        setInterval(function() {
            if (sec > 0) {
                sec--;
            } else if (sec < 1 && min > 0) {
                sec = 60; 
                min--;
            } 
        }, 1000);
        timeRemaining.innerHTML = hour + ":" + min + ":" + sec;
    }
}