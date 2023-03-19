const hour = document.getElementById("hour")
const minutes = document.getElementById("minutes")
const second = document.getElementById("seconds")
const ampm = document.getElementById("ampm")

function updateClock() {
    let hs = new Date().getHours()
    let ms = new Date().getMinutes()
    let ss = new Date().getSeconds()
    let ampms = "AM"

    if (hs > 12) {
        ampm = "PM"
    }

    hs = hs < 10 ? "0" + hs : hs;
    ms = ms < 10 ? "0" + ms : ms;
    ss = ss < 10 ? "0" + ss : ss;


    hour.innerHTML = hs;
    minutes.innerHTML = ms;
    second.innerHTML = ss;
    ampm.innerHTML = ampms;
    setTimeout(() => {
        updateClock()
    }, 1000)

}
updateClock()