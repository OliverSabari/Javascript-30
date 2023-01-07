//Key Sequence Detection (KONAMI CODE)


window.addEventListener("keyup" , handleKeys)

const pressedKey =[]
const secretcode = "sabari"

function handleKeys(e) {

    pressedKey.push(e.key)
    console.log(pressedKey)

    pressedKey.splice(
        -secretcode.length - 1,
        pressedKey.length - secretcode.length
      );

    if(pressedKey.join("").includes(secretcode)){
        cornify_add()
    }
}