const panel = document.querySelectorAll(".panel")

        panel.forEach(items => items.addEventListener("click" , addingClass))

        function addingClass(){
            this.classList.toggle("open-active")
        }

        panel.forEach(items => items.addEventListener("transitionend" , open))

        function open(e){
            if(e.propertyName.includes("flex")){
                this.classList.toggle("open")
            }
        }
