

const checkboxes = document.querySelectorAll(".allItems input[type=checkbox]")

checkboxes.forEach(checkbox => checkbox.addEventListener("click" , handleClick ) )

let lastchecked;
let inbetween =false

function handleClick(e){
   
    if(e.shiftKey && this.checked){
       checkboxes.forEach(checkbox => {
        if(checkbox === this || checkbox === lastchecked){
            inbetween = !inbetween
        }
       })
    }

    if(inbetween) {
        console.log(this)
        this.checked
    }

    lastchecked = this
}
