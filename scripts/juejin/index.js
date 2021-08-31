const axios = require('axios')
const { logInfo } = require('../tools')

const signUrl =
  'https://api.juejin.cn/growth_api/v1/check_in'
const taskName = '掘金'

const cookie = config.juejin.cookie

const headers = {
  headers: {
    origin: 'https://juejin.cn',
    pragma: 'no-cache',
    referer: 'https://juejin.cn/',
    'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Microsoft Edge";v="92"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36 Edg/92.0.902.84',
    cookie
  }
}

function sign() {
  return axios
    .post(signUrl,'', headers)
    .then(res => {
      if (res.data.err_no == 0) {
        logInfo(taskName, `签到成功，获得${res.data.data.incr_point}矿石`)
      } else {
        logInfo(taskName, `签到失败，${res.data.err_msg}`)
      }
    })
    .catch(err => {
      logInfo(taskName, err)
      logInfo(taskName, '签到失败，cookie失效或其他原因')
    })
}

async function juejin() {
  await sign()
}

module.exports = juejin
