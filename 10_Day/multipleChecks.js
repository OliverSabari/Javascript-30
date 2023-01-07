

const checkboxes = document.querySelectorAll(".allItems input[type=checkbox]")

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleClick))

let lastchecked;


function handleClick(e) {

    let inBetween = false

    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {

            if (checkbox === this || checkbox === lastchecked) {
                inBetween = !inBetween
            }
            if (inBetween) {
                checkbox.checked = true
            }

        })
    }



    lastchecked = this
}
