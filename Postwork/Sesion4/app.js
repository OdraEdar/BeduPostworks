//SERVIDOR: aqui levanto la app desde la terminal node app.js
const {getToken, authentication} = require("./Login");
const express = require('express')
const bodyParser = require('body-parser');
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    const userCredentials = {email: req.body.email, password: req.body.password}
    const response = getToken(userCredentials)
    res.send(response)
})
app.post('/authentication', (req, res) => {
    const tokenReceived = req.body.token;
    const valid = authentication(tokenReceived);
    if(!valid){
        res.send("Invalid Token");
    }else{
        res.send("Valid token");
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})