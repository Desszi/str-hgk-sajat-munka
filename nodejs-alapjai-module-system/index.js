const increaseAndFormatDate = require('./utils')
const utils = require('./utils2') 

const dateArray = [ new Date('December 25, 1999 23:15:30'),
                    new Date('August 22, 1999 22:35:45'),
                    new Date('October 4, 1999 11:15:30'),
                    new Date('Juny 14, 1999 23:15:30'),
                    new Date('January 30, 2000 23:15:30')]

console.log(increaseAndFormatDate(dateArray));

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




