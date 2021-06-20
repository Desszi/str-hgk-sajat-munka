const { mkdir, writeFile } = require('fs').promises;

const folderArray = ["controllers", "routers", "views"]
const fileArray = [
    './controllers/site.controller.js',
    './routers/site.router.js',
    './views/index.html',
    './app.js'
]

folderArray.forEach(folder => mkdir(folder))
fileArray.forEach(file => writeFile(file, ``))

