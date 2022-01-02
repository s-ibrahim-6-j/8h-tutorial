// npm global command comes with node
// npm --v

//local dependency use if only project specific
// npm i <packName>
// i is short for install 


//global dependency use for generally more projs
//npm install -g <packName>
// sudo npm install -g <packname> (mac)

// package.json - manifest file stores all info imp about package or proj
// manual approach create .json in root, create properties etc
// npm init (step by step, press enter to skip)
// npm init -y everything defualt
// root means base folder or main folder no subfolders!



const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const  newItems = _.flattenDeep(items);
console.log(newItems)




