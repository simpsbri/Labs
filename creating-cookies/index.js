//import express from 'express'
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/light-mode', (req, res) => {
  res.cookie('theme', 'light-mode')
  res.redirect('/')
})

app.get('/dark-mode', (req, res) => {
  res.cookie('theme', 'dark-mode')
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
