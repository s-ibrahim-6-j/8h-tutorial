const http = require('http')

const server = http.createServer((req,res)=>{
    //req - incoming request
    // res - response back
    if(req.url === '/')
    {
        res.end('Welcome to home')
    }
    if(req.url === '/about')
    {
        res.end('welcome about XD')
    }
    res.end(`
    <h1> OOPS!</h1>
    <p> WE cant seem to find the page you look for </p>
    <a href = "/"> Back home </a>
`)

// some issue with res.end(template)




})


server.listen(5000)