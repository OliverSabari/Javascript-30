
const time = document.querySelectorAll("[data-time]")

const timeArr = Array.from(time)

const secondsleft = timeArr
    .map(items => items.dataset.time)
    .map(items => {
        const [mins, secs] = items.split(":").map(parseFloat)
        return mins * 60 + secs
    })
    .reduce((total, videoSec) => total + videoSec)


//Hours
let seconds = secondsleft
const hours = Math.floor(seconds / 3600)


//Minutes

seconds = seconds % 3600
const mins = Math.floor(seconds / 60)

//Seconds
seconds = seconds % 60

console.log(`${hours}hours ${mins}minutes ${seconds}seconds`);
