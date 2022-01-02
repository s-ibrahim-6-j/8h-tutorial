const { Console } = require('console')
const {readFileSync, writeFileSync} = require('fs')
// direct access to methods of fs
// sync is blocking code
//async is unblocking


console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
// if read takes longer --> app is slow
console.log(first,second)

writeFileSync('./content/result-sync.txt',
`here is the result: ${first}, ${second}`,
{flag : 'a'}
)

console.log("done with this")
console.log("start next ")

//flag a means append
