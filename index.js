global.config = require('./config.js')
const checkCookie = require('./scripts/wyyyx')

start()

function start(params) {
  checkCookie()
}
