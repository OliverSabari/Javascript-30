
    const inventors = [
        { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
        { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
        { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
        { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
        { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
        { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
        { first: "Max", last: "Planck", year: 1858, passed: 1947 },
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
        { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
        { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
        { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
    ];

        //Filter the list of inventors for those who born in the 1500's

        const bornFilter = inventors.filter(inventors => inventors.year >=1500 && inventors.year < 1600)

        console.log(bornFilter)

        //Give us an array of inventory first and last name

        const inventorsname = inventors.map(inventors => `${inventors.first} ${inventors.last}`)
        console.table(inventorsname)

        //Sort the inventors by birthdate, oldest to younges

        const birthdate = inventors.sort((a,b) => a.year > b.year ? 1: -1  ) //here a is last, b is first

        console.table(birthdate)

    //How many years did all inventors live

        const yearslived = inventors.reduce((initial , inventors) => {
            const inventorsAge = inventors.passed - inventors.year
            return initial += inventorsAge
        } , 0 )

        console.log(yearslived)

        //Create a list of boulevards in Paris that contain "de" anywhere in the name

        //https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    //     const container = document.querySelector(".mw-category-generated")
    //     const list = Array.from(container.querySelectorAll("a"))

    // const listofContent = list.map(items => items.textContent)

    // const de = listofContent.filter(items => items.includes("de"))

    // console.log(de)

    const people = [
        "Bernhard, Sandra",
        "Bethea, Erin",
        "Becker, Carl",
        "Bentsen, Lloyd",
        "Beckett, Samuel",
        "Blake, William",
        "Begin, Menachem",
        "Bellow, Saul",
        "Benchley, Robert",
        "Bent, Silas",
        "Berle, Milton",
        "Berry, Halle",
        "Biko, Steve",
        "Beck, Glenn",
        "Bergman, Ingmar",
    ];

    //Sort the people alphabetically by last name

    const lastname = people.sort((a,b) => {

        const [alast,afirst] = a.split(", ")
        const [blast,bfirst] = b.split(", ")

       return alast > blast ? 1 : -1

    })

    console.table(lastname)

    const data = [
        "car",
        "car",
        "truck",
        "truck",
        "bike",
        "walk",
        "car",
        "van",
        "bike",
        "walk",
        "car",
        "van",
        "car",
        "truck",
    ];


    //Sum up the instace of each of the above


    const sumup  = data.reduce((obj , data) => {

        if(!obj[data]){
            obj[data] = 0
        }

        obj[data] ++

        return obj

    } , { } )

    console.log(sumup )

