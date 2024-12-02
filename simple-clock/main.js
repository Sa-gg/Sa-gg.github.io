const dayjs = require('dayjs');
const myDate = new Date();

var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin

dayjs.extend(utc)
dayjs.extend(timezone)

const tz = "America/New_York"

function updateClock() {
    const myDate = new Date();
    var timeZone = dayjs.tz.guess();
    var time = dayjs(myDate).format('HH:mm:ss');
    var date = dayjs(myDate).format('dddd[, ]D[ ]MMMM[, ]YYYY');

    document.getElementById("timezone").innerHTML = timeZone;
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
}

document.addEventListener("DOMContentLoaded", function() {
    // Initial setup
    updateClock();

    // Update the clock every second (1000 milliseconds)
    setInterval(updateClock, 1000);
});