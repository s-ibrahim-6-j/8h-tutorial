const {readFile, writeFile} = require('fs')
// direct access to methods of fs
// asynch
// callbackk sceene 
console.log('start')

// async i.e. callback although messuy it is better for longer tasks 

// if no coding like utf is specified then we get buffer value output
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    // result is only accessible in this callback function i.e. local


    const first = result;
    // save first, read second.
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        // result is only accessible in this callback function i.e. local
    
        const second = result
        writeFile(
            './content/result-async.txt',
            `here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }

                console.log('done with task ')
        })
    })
})

console.log('start next ')

// more better than sync. if read takes time the rest code continues no app slowing
