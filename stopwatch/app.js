
let startStopTimer = document.querySelector("#startStopTimer")
let resetTimer = document.querySelector("#resetTimer")

let hours = 0
let minutes = 0
let seconds = 0

let displayHours = "00";
let displayMinutes = "00";
let displaySeconds = "00";

let timerInterval = null;
let timerStatus = "stopped"


function addTime() {
    seconds++ 
    
    if (seconds == 60) {
        seconds = 0;
        minutes++
        

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }

    }

    displaySeconds =  seconds < 10 ? "0" + seconds : seconds;
    displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    displayHours = hours < 10 ? "0" + hours : hours;
    document.querySelector(".timer").innerText = displayHours + ":" + displayMinutes + ":" + displaySeconds
    

}


startStopTimer.addEventListener('click', function() {  

    if (timerStatus == "stopped") {
        timerInterval = window.setInterval(addTime, 1000)
        timerStatus = "running"
        document.querySelector('#startStopTimer').innerHTML = `<i class="fa-solid fa-pause startStopTimer"></i>`
    } else {
        window.clearInterval(timerInterval)
        timerStatus = "stopped"
        document.querySelector('#startStopTimer').innerHTML = ` <i class="fa-solid fa-play startStopTimer"></i>`

    }
    
})

resetTimer.addEventListener('click', function(){
    
    window.clearInterval(timerInterval)
    hours = 0, minutes = 0, seconds = 0
    timerStatus = "stopped"
    document.querySelector('#startStopTimer').innerHTML = ` <i class="fa-solid fa-play startStopTimer"></i>`
    document.querySelector(".timer").innerText = "00:00:00"
    

})



