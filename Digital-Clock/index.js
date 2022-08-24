const hourEL = document.getElementById("hour")
const minuteEL = document.getElementById("minute")
const secondEl = document.getElementById("second")
const ampmEl = document.getElementById("ampm")

function updateclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "Am"
    if (h > 12) {
        h = h - 12
        ampm = "Pm"
    }

    hourEL.innerText = h;
    minuteEL.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateclock();
    }, 1000);

}

updateclock();