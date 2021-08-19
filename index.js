global.config = require('./config.js')
global.defaltUserAgent = 'Dalvik/2.1.0 (Linux; U; Android 11; Redmi K20 Pro Premium Edition Build/RKQ1.200826.002)'

start()

function start(params) {
  const wyyyx = require('./scripts/wyyyx')
  wyyyx()
}
