

const alldiv = document.querySelectorAll("div")

alldiv.forEach(item => item.addEventListener("click" , handleDivClick , {
                                                                        capture:false  ,
                                                                        once:true 
                                                                        }))


function handleDivClick(e){
    console.log(this.classList.value)
     e.stopPropagation()   //stops bubbling
    
}

// Capture,Bubbling, Stop propagation and once  :
// ----------------------------------------------
  //Caputre is by default false and it will bubble up
  //Bubble up will not happen if capture is true
  //If capture is true and stoppropagation is also there then it will print the first capture. 
  //If capture is false and stoppropagation is also there then it will print the exact div that has been clicked at the end of capture
  //once is to unbind the event listener. So eventlistener will be executed only once.                                                                    



