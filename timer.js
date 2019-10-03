function runTimer() {
    let timeRemaining = document.getElementById("timeRemaining");
    let hour = document.getElementById("hour").value;
    let min = document.getElementById("min").value;
    let sec = document.getElementById("sec").value;
    
    timeRemaining.innerHTML = "";
    
    timeRemaining.innerHTML = "Time Remaining: " + hour + ":" + min + ":" + sec;
    if (!(+hour >= 0 && +hour <= 9999) || hour.length < 1 || hour.length > 9999 || (!(+min >= 0 && +min <= 59)) || min.length < 1 || min.length > 2 || !(+sec >= 0 && +sec <= 59) || sec.length < 1 || sec.length > 2) {
        timeRemaining.innerHTML = "Invalid time!";
    } else {
        let setTimer = setInterval(function() {
            timeRemaining.innerHTML = "Time Remaining: " + hour + ":" + min + ":" + sec;
            if (sec > 0) {
                sec--;
            } else if (min > 0) {
                sec = 59; 
                min--;
            } else if (hour > 0) {
                min = 59;
                hour--;
            } else {
                alert("Out of time!");
                timeRemaining.innerHTML = "Out of time!";
                document.getElementById("start").disabled = false;
                clearInterval(setTimer);
            }
        }, 1000);
        document.getElementById("start").disabled = true;
    }
}