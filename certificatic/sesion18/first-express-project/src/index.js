const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.end('*** Server is running now ***')
})

app.get('/login', (req, res) => {
    res.end('*** Hello world with express ***')
  })
  
app.listen(port, () => {
  console.log(`Server running on port:${port}`);
})