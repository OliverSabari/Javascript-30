

const speed= document.querySelector(".speed")
const bar = document.querySelector(".speed-bar")
const video = document.querySelector(".flex")

speed.addEventListener("mousemove" , handlemove)

function handlemove(e) {

    const startingpoint = e.pageY - this.offsetTop
    
    const min = 0.4
    const max =4

    const percent = startingpoint / this.offsetHeight
   
    const height =Math.round(percent * 100) + "%"

    const playbackrate = percent * (max - min) + min

    bar.style.height = height
    bar.textContent = playbackrate.toFixed(2)+"X"

    video.playbackRate = playbackrate

}