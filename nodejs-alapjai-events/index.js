const Logger = require('./logger')
const {createReadStream, createWriteStream, writeFile } = require('fs')

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
        writeFile(
            `${path}Copy.txt`,
             word.split(' ')
                .map(letter => capitalizeLetter(letter))
                .join(' ')
        )
        loggerExample.success('File transform successful.')
    } catch (error) {
        loggerExample.error(error.message)
    }
})

loggerExample.emit('capitalizer', readableStream);

