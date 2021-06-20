const Logger = require('./logger')
const {createReadStream, createWriteStream } = require('fs')

const loggerExample = new Logger()
const path = './arbitrary'

const readableStream = createReadStream(`${path}.txt`, { 
    encoding: 'utf-8', 
    highWaterMark: 822 
});

const writeableStream = createWriteStream(`${path}Copy.txt`)
readableStream
    .pipe(writeableStream)

const capitalizeLetter = string => {
    string.charAt(0).toLocaleUpperCase() + string.slice(1)
}

readableStream.on('capitalizer', (word) => {
    try {
        const transformLetters =  word.split(' ')
            .map(letter => capitalizeLetter(letter))
            .join(' ')    
        console.log(transformLetters);
        loggerExample.success('File transform successful.')
    } catch (error) {
        loggerExample.error(error.message)
    }
})

loggerExample.emit('capitalizer', readableStream);

