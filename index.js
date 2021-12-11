
const http = require('http');
Myserver=http.createServer((req,res) => {
    if(
        req.url=='/'
    ){
        res.write('Server side');
        res.end();
    }
})

Myserver.listen(
    3000,'127.0.0.1',
    ()=>{
       console.log('Listening'); 
    }
)

const users=require("./sample2");
console.log(users);