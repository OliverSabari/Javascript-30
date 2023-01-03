const input = document.querySelector(".searchingArea")

const display = document.querySelector("#displayArea")

input.addEventListener("keyup" , passEvents )

input.addEventListener("change" , passEvents)

function passEvents(){
    
    // value pass to filter the array which contains state details

   const cityDetails = filterFunc(this.value , detailsArr)

   const searchVal = cityDetails.map(details => {
        return (
            `<li>
                ${details.city} , ${details.state} <span> ${numberWithCommas(details.population)} </span>
            </li>
             
            `
        )   
    }).join('')

  display.innerHTML= searchVal
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const detailsArr = []

const dataURL = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"


fetch(dataURL)
     .then(raw => raw.json())
     .then(data => detailsArr.push(...data))


function filterFunc(val , arr){

     const regex = new RegExp(val , "gi")

    const filteredArr =  arr.filter(items => items.city.match(regex) || items.state.match(regex))

    return filteredArr

}   

