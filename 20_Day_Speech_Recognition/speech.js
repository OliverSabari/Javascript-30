
window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition

const recognition = new speechRecognition()

recognition.interimResults = true

const speechdiv = document.querySelector(".speech-div")

let p = document.createElement("p")

speechdiv.appendChild(p)

recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("")
    p.textContent = transcript

    if (e.results[0].isFinal) {
        p = document.createElement("p")
        speechdiv.appendChild(p)
    }
}
)

recognition.addEventListener("end", recognition.start)

recognition.start()