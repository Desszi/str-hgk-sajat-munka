const htmlResponse = require('./htmlResponse')

const index = res => htmlResponse(res, 'index')
const about = res => htmlResponse(res, 'about')
const contact = res => htmlResponse(res, 'contact')
const error404 = res => htmlResponse(res, 'error404', 404)

module.exports = Object.freeze({
  index,
  about,
  contact,
  error404
})