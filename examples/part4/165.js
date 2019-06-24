const util = require('util')

const name = 'Tony'
const greeting = util.format('Hello %s', name)
console.log(greeting)