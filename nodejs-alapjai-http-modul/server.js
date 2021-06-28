const http = require('http')
const router = require('./router')

const port = 8080

const consoleLog = (url, method) => {
    const localTime = new Intl.DateTimeFormat('hu-HU').format(date.getTime())
    console.log(localTime, `URL : ${url}`, `Method: ${method}`)
}
http.createServer((req, res) => {
    consoleLog(req.url, req.method)
    router[req.url] ? router[req.url](res) : router['/404'](res)
})
    .on('error', err => console.log(`Server error : ${err.message}`))
    .on('listening', () => console.log(`Server is running at http://127.0.0.1:${port}`))
    .listen(port)
