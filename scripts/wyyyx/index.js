const axios = require('axios')

const checkUrl = 'https://n.cg.163.com/api/v2/users/@me'
const signUrl = 'https://n.cg.163.com/api/v2/sign-today'

const userAgent = config.userAgent
const Authorization = config.wyyyx.Authorization

const headers = {
  headers: {
    Authorization:
      Authorization || " bearer xxxxxx",
    "user-agent":
      userAgent || "Dalvik/2.1.0 (Linux; U; Android 11; Redmi K20 Pro Premium Edition Build/RKQ1.200826.002)"
  }
}

function checkCookie() {
  axios.get(checkUrl, headers).then((res)=>{
    console.log(res)
    console.log('coockie有效，即将开始签到...')
  },(res)=>{
    console.log(res.response.status)
    console.log('无效cookie或网络问题')
  })
}

function sign(){

}


module.exports = checkCookie
