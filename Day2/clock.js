
setInterval(clockfunc , 1000)

const secondhand = document.querySelector("[data-second-hand]")

const minuteshand = document.querySelector("[data-min-hand]")

const hourshand = document.querySelector("[data-hour-hand]")


function clockfunc(){
    const date = new Date()
    
    const secondsratio = date.getSeconds() / 60
  
    const minutesratio = (secondsratio + date.getMinutes()) / 60
  
    const hoursratio = (minutesratio + date.getHours()) / 12 
  
    rotatefunc(secondhand,secondsratio)
    rotatefunc(minuteshand, minutesratio)
    rotatefunc(hourshand,hoursratio)

}

function rotatefunc(element,rotateratio) {
   
    element.style.setProperty("--rotation" , rotateratio * 360)
}

clockfunc()