"use strict"

const cbFunc = (err, result) => {
  if (err & err instanceof Error) return console.error(err.message);
  if (err) return console.error(err)

  console.log('에러를 반환하지 않습니다.', result)
}

const asyncFunction = (isTrue, callback) => {
  const err = new Error('This is Error!!')
  if(isTrue) return callback(null, isTrue)
  else return callback(err)
}

asyncFunction(true, cbFunc)
asyncFunction(false, cbFunc)

const fs = require('fs')

try{
  const fileList = fs.readdirSync('/undefiend/')
  fileList.forEach(f => console.log(f))
} catch (err) {
  if (err) console.error(err)
}