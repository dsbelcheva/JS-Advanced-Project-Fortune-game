const express = require('express')
const app = express()

app.set("view engine", 'ejs')

app.get('/',(req,res) =>{
    console.log("Here")
    res.status(200).send("Hi from server")
    res.render("index")
})

app.listen(3000)