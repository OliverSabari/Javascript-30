
const todolist = document.querySelector(".todolist")

const form = document.querySelector(".add-items")

form.addEventListener("submit" , captureInput)

const ListData = JSON.parse(localStorage.getItem("items")) || []

function captureInput(e){

    e.preventDefault()

    const text  = this.querySelector("[name = listname]").value
   
    
    const data = {
        text ,    //which is similar to text : text
        data : false
    }

    ListData.push(data)

    populateList(ListData , todolist)

    localStorage.setItem("items" , JSON.stringify(ListData))

    
    this.reset()
}

function populateList( listOfData = [] , todolist ){

   todolist.innerHTML =  listOfData.map((item,i) => {
        
        return `
            <li> 
            <input type="checkbox" data-index=${i} id="item${i}" ${item.data ? "checked" : "" } />
            <label for="item${i}">  ${item.text} </label>
            </li>
        `
    }).join('')

}

//Event Delegation  || Performing event on UL rather than li as new li maybe added and we cannot have eventlistener for future Li's
function toggleCheck(e){
   if(!e.target.matches("input")) return null

    const inputBox  =e.target
    const indexOfBox = inputBox.dataset.index
    
    ListData[indexOfBox].data = !ListData[indexOfBox].data
    localStorage.setItem("items" , JSON.stringify(ListData))

    populateList(ListData , todolist)
}


todolist.addEventListener("click" , toggleCheck)


populateList(ListData , todolist)