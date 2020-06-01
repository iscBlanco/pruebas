import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3003

app.use(bodyParser.json())  // YA CON EL BODY PARSER

app.get('/', (req, res) => {
    console.log(req.headers)
    res.send('*** Express is running ***')
})
app.post('/login', (req, res) => {
    const { email, password } = req.body
    // console.log(req.body)
    console.log(req.body.email)
    console.log(req.body.password)
    if(email && password){
        res.send(`${email}.jwt.${password}`)
        res.end()
    }else{
        res.status(400).send({error:"¿Qué onda con esos datos? 😞"})
        res.end()
    }
})

app.listen(port, () => {
    console.log(`Server running on port:${port}`)
})


/* YA CON EL  JSON WEB TOKEN INCLUIDO 

    CHECAR LOS CAMBIOS REALIZADOS


                                        */


require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import { sign } from 'jsonwebtoken'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log(req.headers)
  res.send('*** Express is running ***')
})
app.post('/login', (req, res) => {
  const { email, password } = req.body
  if (email && password) {
    const tokenData = {
      email,
      roles: ['copywriter']
    }
    const jwt = sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.send({ jwt })
    res.end()
  } else {
    res.status(400).send({ error: "¿Qué onda con esos datos? 😞" })
    res.end()
  }
})

app.listen(port, () => {
  console.log(`Server running on port:${port}`)
})