

const links = document.querySelectorAll("a")

const spanElement = document.createElement("span")

spanElement.classList.add("highlight")

document.body.append(spanElement)



links.forEach(items => items.addEventListener("mouseenter", handleEnter))

function handleEnter() {

    const { width, height, top, left } = this.getBoundingClientRect()   //this is used to determin the width,height,top,left of the a tags whenever mouse enters

    //Suppose if page scrolls either X or Y we can add it to the existing top/left px like below
    const topWithScroll = top + window.scrollY
    const leftWithScroll = left + window.scrollX

    spanElement.style.width = `${width}px`
    spanElement.style.height = `${height}px`
    spanElement.style.transform = `translate(${leftWithScroll}px , ${topWithScroll}px)`



}