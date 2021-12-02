const express = require('express')
const path = require('path')
const connection=require('./dbconnection')

const app = express()

app.use(express.static('./public'))



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
})

const port = 5100
 
app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})