
const textdiv = document.querySelector(".textdiv") //whole div

const content = textdiv.querySelector("h1") //h1 content

textdiv.addEventListener("mousemove" , handleMove) // addding event listener to whole div

function handleMove(e){
    let {offsetX:x , offsetY:y} = e       // fetching where the mouse is currently present
    const {offsetWidth:width , offsetHeight:height} = textdiv   //Total width and height of textdiv

    if(this !== e.target){   
        //this is whole div and when cursor touches h1 content then it is e.target
       
        x = x +e.target.offsetLeft
        y = y+e.target.offsetTop 

        //adding left and top length to h1 content
    }

    const walk = 100; // 100px
    
    //To determine the horizantal and vertical px of text shadow
    const xwalk = x / width * walk - (walk/2)   

    const ywalk = y / height * walk - (walk/2)

    content.style.textShadow = `${xwalk}px ${ywalk}px  black`


}