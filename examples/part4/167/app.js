const Emitter = require('./emitter')
const em = new Emitter()

em.on('greet', () => {
  console.log('Hello First')
})

em.on('greet', () => {
  console.log('Hello Second')
})

em.emit('greet')