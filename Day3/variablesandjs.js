

const allInputs = document.querySelectorAll(".controls input")

allInputs.forEach(allInputs => allInputs.addEventListener("change",handleinputs))
allInputs.forEach(allInputs => allInputs.addEventListener("mousemove",handleinputs))

function handleinputs(){

    const sizing = this.dataset.sizing || "";
    
    document.documentElement.style.setProperty(`--${this.name}`,this.value + sizing)

}



