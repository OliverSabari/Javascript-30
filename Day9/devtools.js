const para = document.querySelector("p");

      
const dogs = [{
    name: "Rocky",
    age : 2
},
{
    name : "Snickers",
    age : 3
}]

  function clickedFunc() {
    para.style.fontSize = "35px";
    para.style.color = "red";
  }

  // Attribute Modification

  //Click on DOM element and breakon->attriube modification then i will show the debugger exactly where attribute is being modified

  //--------------

  //Console statements

  //Regular

  console.log("Hello");

  //Interpolated

  console.log("Welcome to %s course", "Javascript");

  //Styled

  console.log(
    "%c Welcome to Javascript course",
    "color : red; font-size:25px"
  );

  //Warning

  console.warn("Javascript warning for console");

  //Error

  console.error("Javascript error");

  //Info

  console.info("jkn");

  //Testing

  console.assert(para.style.fontSize === "35px", "Font size is smaller");

  //Clearing

  //console.clear()

  //Viewing DOM Elements

  console.log(para);
  console.dir(para);

  //Grouping

  dogs.forEach(dogs => {
    console.groupCollapsed(`${dogs.name}`)
    console.log(`this is ${dogs.name}`)
    console.groupEnd(`${dogs.name}`)   //Group End is Important
  })

  //Counting

  console.count("Sabari");
  console.count("Sabari");
  console.count("Sabari");
  console.count("Sabari");
  console.count("Wes");
  console.count("Wes");
  console.count("Sabari");

  //Timer

  const dataURL =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  console.time("Fetch");
  fetch(dataURL)
    .then((raw) => raw.json())
    .then((data) => console.timeEnd("Fetch"));