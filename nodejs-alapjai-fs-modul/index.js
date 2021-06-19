const { mkdir, writeFile } = require('fs').promises;
const { createReadStream, createWriteStream, unlink } = require('fs')
const { createGzip } = require('zlib');

const folderArray = ["controllers", "routers", "views"]
const fileArray = [
    './controllers/site.controller.js',
    './routers/site.router.js',
    './views/index.html',
    './app.js'
]

const createFolders = folderArray => {
    return folderArray.map(folder => mkdir(folder))
}

const createFiles = fileArray => {
    return fileArray.map(file => writeFile(file, ``))
}

createFolders(folderArray);
createFiles(fileArray);

const path = require('path');
const archiveFileApplication = (file) => {

    const filePath = `${file}`
    const copyPath = path.join(__dirname, `${file}.bak`)
    
    const writeableStream = createWriteStream(`${file}.bak`)
    const createCompressedFile = createWriteStream(`${file}.gz`)

    const readableStream = createReadStream(file, {
        encoding: 'utf-8',
        highWaterMark: 199
    })
    readableStream.pipe(writeableStream)
    readableStream
        .pipe(createGzip())
        .pipe(createCompressedFile);

    writeableStream.on('finish', () => {    
        unlink(filePath)
        unlink(copyPath)
    }) 
    archiveFileApplication('./archive.txt')
}
