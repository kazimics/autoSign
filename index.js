const config = require('./config.js')
const fs = require('fs')

global.config = config
global.defaltUserAgent =
  'Dalvik/2.1.0 (Linux; U; Android 11; Redmi K20 Pro Premium Edition Build/RKQ1.200826.002)'

const taskList = config.taskList

start(taskList)

async function start(taskList) {
  console.log('—————————————开始执行签到任务—————————————')
  for (let i = 0; i < taskList.length; i++) {
    console.log(`-------------------------`)
    console.log(`${taskList[i]}任务执行中...`)
    let isHaveScript = fs.existsSync(`./scripts/${taskList[i]}`)
    if (isHaveScript) {
      const task = require(`./scripts/${taskList[i]}`)
      await task()
    } else {
      console.log(
        `未找到任务${taskList[i]}的script文件，请检查文件是否存在并确认 taskList 无误`
      )
    }
  }
  console.log('—————————————签到任务执行完毕—————————————')
}
