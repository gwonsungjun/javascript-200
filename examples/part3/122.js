console.log('2018-08-03 07-23-14'.replace('-', ':'))
console.log('2018-08-03 07-23-14'.replace(/-/g, ':'))
console.log('2018-08-03 07-23-14'.replace(/\d/g, '9'))

const littleWomen = 'Meg March, Jo March, Betch March, Amy March'
console.log(littleWomen.replace(/\w+ March/ig, 'Mrs.$&'))
console.log(littleWomen.replace(/\w+ March/ig, (str, d1, d2, d3, d4, offset, s) => {
  let tag = ''
  if (/Meg/.test(str)) tag = '첫째'
  else if (/Jo/.test(str))tag = '둘째'
  else if (/Betch/.test(str)) tag = '셋째'
  else if (/Amy/.test(str)) tag = '넷째'

  console.log(`원작 "작은 아씨들"에서 주인공 ${str}은 ${tag}입니다.`)
  return tag
}))

const name = 'March Amy'
console.log(name.replace(/(March) (Amy)/, '$2 $1'))
console.log(name.replace(/(March) (Amy)/, (str, first, second, offset, s) => {
  console.log(`${second} is name, ${first} is first name`)
  return `${second} ${first}`
}))