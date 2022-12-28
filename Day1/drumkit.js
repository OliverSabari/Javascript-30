
const playsound =(e) => {

    const findAudio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);

    const findDiv = document.querySelector(`.Kit[data-key = "${e.keyCode}"]`);

    if(!findAudio){
        return;
    }

    findAudio.currentTime = 0;

    findAudio.play();

    findDiv.classList.add("playing")

    const kits = document.querySelectorAll('.Kit')

    function removingClass(e) {
        if(e.propertyName != "transform"){
             return;
        }
       
        this.classList.remove("playing")
    }

    kits.forEach(items => items.addEventListener('transitionend', removingClass))

  
}

window.addEventListener("keydown", playsound)