const utils = require('./utils2')

const userArray = [
    {
        firstName: "Porkoláb",
        lastName: "Mercédesz",
        age: 21
    },
    {
        firstName: "Varga",
        lastName: "Nóra",
        age: 17
    },
    {
        firstName: "Ilosvay",
        lastName: "Viktória",
        age: 100
    }
]

console.log(utils.generateUserList(userArray))
console.log(utils.getUserNames(userArray))