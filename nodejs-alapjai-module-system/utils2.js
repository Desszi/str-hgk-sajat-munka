//Újabb utils.js létrehozása, mivel az előzőn feladatnál ki volt kötve, hogy egy függvényt exportáljunk át, itt meg a kért exportálandó függvényeket befagyasztanunk kell.

const generateUserList = userArray => {
    return userArray.map( user => ({
        isAdult: 18 <= user.age ? true : false,
        fullName : `${user.firstName} ${user.lastName}`
    }))
}

const getUserNames = userArray => {
    return generateUserList(userArray).map( user => user.fullName).join(', ')
}

module.exports = Object.freeze({
    generateUserList,
    getUserNames
})

