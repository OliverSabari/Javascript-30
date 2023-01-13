

const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog",
  ];

  function strip(bandName){
   return bandName.replace(/^(a |the |an )/i , "").trim()
  }

  const sortedbands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1 )


  const list = document.querySelector(".bandList")

  list.innerHTML = sortedbands.map(item => {
    return `<li> ${item} </li> ` 
  }).join('')

// 2nd Method Tried by changing bands data which ends up with more complex

//   const withoutArticle = bands.map(band => {

//     const textArray = band.split(" ")

//     if(textArray[0] === "The" || textArray[0] === "A" || textArray[0] ==="An"){
       
//         return band.slice(band.indexOf(" ") + 1 )
//     }
//     else{
//        return band
//     }
    
//   })

// const sortedArr = withoutArticle.sort((a,b) =>{
//     const f = a.split(' ');
//     const s = b.split(' ');
//     if(f[0] > s[0])
//         return 1;
//     if(f[0] < s[0])
//         return -1;
// } )

// sortedArr.map( data => {

//     let afirstVar = data.split(" ")
//     let bfirstVar = bands.split(" ")

//     if(afirstVar[0] != bfirstVar[0]){

//     }
//     else{
//         return data
//     }

// })