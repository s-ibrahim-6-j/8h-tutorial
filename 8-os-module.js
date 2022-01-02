const os = require('os')

// info about current user 
const user = os.userInfo()
console.log(user)

//method for  sys uptime in seconds
console.log(`The system uptime is ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS)