

const nav = document.querySelector(".navbar-div")

const topofnav = nav.offsetTop


window.addEventListener("scroll" , handleScroll)

function handleScroll() {

    if(window.scrollY >= topofnav){
        document.body.style.paddingTop = nav.offsetHeight + "px"
        console.log(nav.offsetHeight)
        document.body.classList.add("sticky-nav")
        

    }else {
        document.body.style.paddingTop =0
        document.body.classList.remove("sticky-nav")
    }

}

