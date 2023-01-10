
//Starting with numbers, strings and booleans

let num1 = 20
let num2 = num1

console.log(num2)

num2 = 30               // Here it will only change the num2 value as we are just putting the value of num1 into num2 not reference

console.log(num1, num2)


//same goes with string

let Name = "sabari"
name2 = Name

console.log(name2)

name2 = "Sab" // Here it will only change the name2 value as we are just putting the value of Name into name2 not reference

console.log(Name, name2)


//same goes with boolean

let x = true

let y = x

console.log(y)

y = false  // Here it will only change the y value as we are just putting the value of x into y not reference

console.log(x, y)

//-------------------------------------------------------------------------------------------------------------------------------------

//In Array its a different Case

const players = ["sam", "oliver", "kiran"]

// const players2 = players

// console.log(players2)

// players2[3] = "abc"             //  This will change both players and players2 array. Its because of array reference not array copy

// console.log(players)
// console.log(players2)

//To avoid the above problem we can do below

// const players2 = Array.from(players)         //We can use Array.from

// const players2 = [...players]                   //We can use Spread Operator

// const players2 = players.slice()                //We can use Slice method

const players2 = [].concat(players)              //We can use concat

players2[3] = "abc"

console.log(players)
console.log(players2)

// Same thing goes for object as well. It will give the reference of object not copy

const person = {
    name: "sabari",
    age: '23'
}

// const person2 = person

// person2.number = 5                     //  This will change both person and person2 object. Its because of object reference not object copy

// console.log(person)
// console.log(person2)


// TO solve the above problem we can do the below things,

// const person2 = Object.assign({},person,{number : 5})

// console.log(person)
// console.log(person2)

//Another method is spread operator.

const person2 = {...person}

person2.number = 5

console.log(person)
console.log(person2)


//All the above are one deep level objects. If we have more complex objects we can use clone deep method

const sabari = {
    name: "sabari",
    age: '23',
    social : {
        twitter : "@sabari",
        facebook : "@sabari"
    }
}

// const sab = Object.assign({} , sabari )

// sab.social.instagram = "@sabari"            // This will modify both sabari and sab. As social is deep object and it will work with object.assign

// console.log(sabari)
// console.log(sab)

//To SOLVE THE ABOVE PROBLEM we need to use Clone Deep method

//Another cheating way is like below


const sab = JSON.parse(JSON.stringify(sabari))      //But this is not recommended way.

sab.social.instagram = "@sabari"

console.log(sabari)
console.log(sab)













