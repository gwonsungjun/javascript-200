"use strict"

const fs = require('fs')

const checkDir = (path, callback) => {
  fs.stat(path, (err, stats) => {
    if (err && err.code === 'ENOENT') return callback(null, true)
    if (err) return callback(err)

    return callback(null, !stats.isDirectory())
  })
}

const currentPath = __dirname;
let path = `${currentPath}/js200`

checkDir(path, (err, isTrue) => {
  if(err) return console.log(err)

  if(!isTrue) {
    console.log('이미 동일한 디렉토리가 있습니다. 디렉토리 명을 변경합니다.')
    path = `${currentPath}/js200-new`
  }

  fs.mkdir(path, (err) => {
    if (err) console.log(err)

    console.log(`${path} 경로로 디렉토리를 생성했습니다.`)
  })
})
