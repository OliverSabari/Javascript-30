
//To know the exact location like 30 deg north from current location we can use the Heading

//Run only on MAC OS and select the simulator. We can use X code for the simulator

//It wont work in chrome as it gives us only latitude and longitude


//Selecting the compass and KM/h text from html

const arrow = document.querySelector('.arrow')

const speed = document.querySelector(".speed.value")

//Acessing the watch Position method to know the exact position

navigator.geolocation.watchPosition( (data ) => {

    //Updating the speed data
    speed.textContent = data.coords.speed

    //Using heading ,we need to rotate the arrow
    arrow.style.transform = `rotate(${data.coords.heading}deg)`

} , (err) => {

    //This error callback function is executed when user does not provide access to his location
    
    alert("You need to allow the access to location")
})











