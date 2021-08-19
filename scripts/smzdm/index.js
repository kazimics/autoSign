const axios = require('axios')
const { logInfo } = require('../tools')

const signUrl =
  'https://zhiyou.smzdm.com/user/checkin/jsonp_checkin?callback=&_='
const taskName = '什么值得买'

const cookie = config.smzdm.cookie

const headers = {
  headers: {
    Referer: 'https://www.smzdm.com/',
    cookie: cookie
  }
}

function sign() {
  return axios
    .get(signUrl, headers)
    .then(res => {
      if (res.data.error_code == 0) {
        logInfo(taskName, `签到成功，连续签到${res.data.data.checkin_num}天`)
      } else {
        logInfo(taskName, res.data.error_msg)
      }
    })
    .catch(err => {
      logInfo(taskName, err)
      logInfo(taskName, '签到失败，cookie失效或其他原因')
    })
}

async function smzdm() {
  await sign()
}

module.exports = smzdm
