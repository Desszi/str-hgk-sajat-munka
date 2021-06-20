//Újabb utils.js létrehozása, mivel az előzőn feladatnál ki volt kötve, hogy egy függvényt exportáljunk át, itt meg a kért exportálandó függvényeket befagyasztanunk kell.

const generateUserList = userArray => {
    return userArray.map( user => ({
        isAdult: 18 <= user.age ? true : false,
        fullName : `${user.firstName} ${user.lastName}`
    }))
}

const getUserNames = userArray => {
    return userArray.map( user => `${user.firstName} ${user.lastName}`).join(', ')
    //generateUserList(userArray).fullName
}

module.exports = Object.freeze({
    generateUserList,
    getUserNames
})

