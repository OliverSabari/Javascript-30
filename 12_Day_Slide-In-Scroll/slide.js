

const allimages = document.querySelectorAll("img")


window.addEventListener("scroll",debounce(setIn))


function setIn(e){

   allimages.forEach(image => {

    //half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - image.height/2
    
    //finding the bottom of image
    const imgBottom = image.offsetTop + image.height
    
    //isHalf of the image shown
    const isHalfShown = slideInAt > image.offsetTop

    //Checking whether not scrolled past the image
    const isNotScrolledPast = window.scrollY <imgBottom

    if(isHalfShown && isNotScrolledPast){
        image.classList.add("active")
    }
    else{
        image.classList.remove("active")
    }
   })
}

//Debounce function

function debounce(func,wait = 20 ,immediate = true){
    var timeout;
    return function () {
        var context = this , args = arguments
        var later = function(){
            timeout = null;
            if(!immediate) func.apply(context,args)
        }
        var callNow = immediate && !timeout 

        clearTimeout(timeout);

        timeout = setTimeout(later,wait)

        if(callNow) func.apply(context,args)
    }
}














