const controller = require('./controller')

const router = {
  '/': res => controller.index(res),
  '/about': res => controller.about(res),
  '/contact': res => controller.contact(res),
  '/error404': res => controller.error404(res)
}

module.exports = Object.freeze(router)