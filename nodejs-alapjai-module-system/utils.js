const increaseDate = (date, dayNumber = 3) => {
    return (date.getDate() + dayNumber) *24*60*60*1000
}

const increaseAndFormatDate = arr => {
   return arr.map(date => new Intl.DateTimeFormat('hu').format(increaseDate(date)))
}

module.exports = {
    increaseAndFormatDate
}
