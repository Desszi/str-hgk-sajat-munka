const { mkdir, writeFile } = require('fs').promises;

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
createFolders(folderArray);

const createFiles = fileArray => {
    return fileArray.map(file => writeFile(file, ``))
}
createFiles(fileArray);