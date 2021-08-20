const axios = require('axios')
const { logInfo } = require('../tools')

const checkUrl = 'https://n.cg.163.com/api/v2/users/@me'
const signUrl = 'https://n.cg.163.com/api/v2/sign-today'
const taskName = '网易云游戏'

const userAgent = config.userAgent
const Authorization = config.wyyyx.Authorization

const headers = {
  headers: {
    Authorization: Authorization || 'bearer xxxxxx',
    'user-agent': userAgent || defaltUserAgent
  }
}

let checkState = false

function checkCookie() {
  return axios
    .get(checkUrl, headers)
    .then(res => {
      checkState = true
      logInfo(taskName, 'cookie有效，即将开始签到...')
    })
    .catch(err => {
      logInfo(taskName, err)
      logInfo(taskName, 'cookie无效或网络问题')
    })
}

function sign() {
  return axios
    .post(signUrl, '', headers)
    .then(res => {
      logInfo(taskName, '签到成功')
    })
    .catch(err => {
      logInfo(taskName, err)
      logInfo(taskName, '签到失败，已签到或其他原因')
    })
}

async function wyyyx() {
  await checkCookie()
  if (checkState) {
    await sign()
  }
}

module.exports = wyyyx
