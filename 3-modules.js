// Modules only share min. commojs used by node. every file is a module

const  names = require('./4-names')

const sayHi = require('./5-utills')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')

sayHi('susan')  
sayHi(names.john) 
sayHi(names.peter)  