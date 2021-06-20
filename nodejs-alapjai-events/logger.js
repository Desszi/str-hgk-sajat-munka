const EventEmitter = require('events')

class Logger extends EventEmitter {
    error(errorMessage) {
        console.log('\x1b[31m', errorMessage);
    }
    success(successMessage) {
         console.log('\x1b[32m', successMessage);
    }
}

module.exports = Logger 