

const slider = document.querySelector(".items")

let isDown = false 
let startX;
let scrollleft


slider.addEventListener("mousedown" , (e) => {
        isDown = true 

        startX = e.pageX - slider.offsetLeft;

        scrollleft = slider.scrollLeft
})


slider.addEventListener("mouseleave" , () => {
    isDown = false 
})


slider.addEventListener("mouseup" , () => {
    isDown = false
})


slider.addEventListener("mousemove" , (e) => {
    if(!isDown) return;
    e.preventDefault()

    const x = e.pageX - slider.offsetLeft
    const walk = x - startX

    slider.scrollLeft = scrollleft - walk
})