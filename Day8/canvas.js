window.addEventListener("load", () => {
    const canvas = document.querySelector("#drawarea")

    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let isDrawing = false;

    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true
        draw(e)
    })

    canvas.addEventListener("mouseup", () => {
        isDrawing = false
        ctx.beginPath()
    })

    canvas.addEventListener("mousemove", draw)

    let hue = 0;

    function draw(e) {

        if (!isDrawing) return;

        ctx.lineWidth = 100
        ctx.lineCap = "round"
        ctx.strokeStyle = `hsl(${hue} , 100% ,50%)`

        ctx.beginPath()
        ctx.lineTo(e.clientX, e.clientY)
        ctx.moveTo(e.clientX, e.clientY)
        ctx.stroke()

        hue++
        if (hue >= 360) {
            hue = 0
        }

    }

})
