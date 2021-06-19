//Újabb utils.js létrehozása, mivel az előzőn feladatnál ki volt kötve, hogy egy függvényt exportáljunk át

const generateUserList = userArray => {
    return userArray.map( user => {
        isAdult: 18 <= user.age ? true : false
        fullName: `${user.firstName} ${user.lastName}`
    })
}

const getUserNames = userArray => {
    return userArray.map(
        user => `${user.firstName} ${user.lastName}`        
    ).join(', ')
}

module.exports = Object.freeze({
    generateUserList,
    getUserNames
})

