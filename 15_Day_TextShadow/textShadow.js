
const textdiv = document.querySelector(".textdiv")

const content = textdiv.querySelector("h1")

textdiv.addEventListener("mousemove" , handleMove)

function handleMove(e){
    let {offsetX:x , offsetY:y} = e
    const {offsetWidth:width , offsetHeight:height} = textdiv

    if(this !== e.target){
       
        x = x +e.target.offsetLeft
        y = y+e.target.offsetTop 
    }

    const walk = 100; // 100px
    
    const xwalk = x / width * walk - (walk/2)

    const ywalk = y / height * walk - (walk/2)

    content.style.textShadow = `${xwalk}px ${ywalk}px  black`


}