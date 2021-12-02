const express = require('express')
const path = require('path')
const connection=require('./dbconnection')

const app = express()

app.use(express.static('./public'))

app.get('/bd',(req,res)=>{
    
    connection.query('select * from utilizadores', function(err,result){
        if(err){
            console.log(err)
        }else{
            res.json(result)
        }
    })
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
})

const port = 5100
 
app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})