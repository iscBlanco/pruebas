require ('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const port = 3000
const bodyParser = require('body-parser') 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/login', (req, res) => {
  let email = req.body.email
  let password = req.body.password
  /*console.log(process.env.JWT_SECRET)
  console.log(password)
  res.send('llego la informacion de login!')*/
  if (email !== 'blancotattoos@hotmail.com'){
    res.status(404).send('invalid user')
  }else if(email === 'blancotattoos@hotmail.com' && password ==='hola'){
    let token = jwt.sign(
      {id:'00369'},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
      )

      res.status(200).send({
        auth:true,
        token,
        user:{
          id:'00369',
          name: 'Jose Luis Blanco',
          email,
          is_admin: false
        }
      })
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))