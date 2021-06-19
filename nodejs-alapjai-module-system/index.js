const increaseAndFormatDate = require('./utils') 

const dateArray = [ new Date('December 25, 1999 23:15:30'),
                    new Date('August 22, 1999 22:35:45'),
                    new Date('October 4, 1999 11:15:30'),
                    new Date('Juny 14, 1999 23:15:30'),
                    new Date('January 30, 2000 23:15:30')]
                    
console.log(increaseAndFormatDate(dateArray));