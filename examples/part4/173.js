"use strict"

const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'js200', 'hello.txt')

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) return console.log('삭제할 수 없는 파일입니다')

  fs.unlink(filePath, (err) => err ?
  console.log(err) : console.log(`${filePath}를 정상적으로 삭제했습니다`))
})