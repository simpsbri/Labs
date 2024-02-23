const express = require('express')
const app = express()
const path = require('path')

app.get('/answers.json', (req, res) => {
  res.sendFile('answers.json')
})

app.listen(3000, () => {
  console.log(`Listening on PORT 3000`)
})
