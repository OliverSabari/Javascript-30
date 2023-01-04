
//Array Cardio 2 => some, every , find , findIndex

const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
];

//is at least one person 19?

const findOne = people.some(people => (new Date().getFullYear()) - people.year >= 19)

console.log({ findOne })

//is everyone 19?

const everyone = people.every(people => (new Date().getFullYear()) - people.year >= 19)

console.log({ everyone })

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
];


//find the comment with the ID of 823423

const findId = comments.find(comments => comments.id === 823423)

console.log(findId)


//Find the comment with this ID and delete the comment with the ID of 823423

const findAndDelete = comments.findIndex(comments => comments.id === 823423)

comments.splice(findAndDelete, 1)

console.log(comments)