const { createReadStream, createWriteStream, unlink } = require('fs')
const { createGzip } = require('zlib');
const path = require('path');

const copyArchiveFile = (fileName) => {

    const readableStream = createReadStream(`${fileName}.bak`, { 
        encoding: 'utf8', 
        highWaterMark: 822
    });

    const writeableStream = createWriteStream(`${fileName}.bak`)  
    const createCompressedFile = createWriteStream(`${fileName}.bak.gz`)
  
    readableStream
        .pipe(writeableStream)

    readableStream
        .pipe(createGzip())
        .pipe(createCompressedFile)

    writeableStream.on('ending', () => {
        unlink(fileName, (err) => {
            if (err) throw err
            console.log(`${fileName} does not exist.`)
        })        
        unlink(path.join(__dirname, `${fileName}.bak`), (err) => {
            if (err) throw err
            console.log(`${fileName}.bak does not exist.`)
        })
    })
}
copyArchiveFile('./copyarchive.txt')
