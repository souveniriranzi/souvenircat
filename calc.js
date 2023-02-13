const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Go to localhost:3000/operationname/[number]/[number] and get the answer')
})

app.get('/addition/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var sum = (num1 + num2).toString()
  res.send(sum)
})

app.get('/subtraction/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var difference = (num1 - num2).toString()
  res.send(difference)
})

app.get('/multiplication/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var product = (num1 * num2).toString()
  res.send(product)
})

app.get('/division/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var quotient = (num1 / num2).toString()
  res.send(quotient)
})
app.listen(3000, function () {
  console.log('Running at localhost:3000' )
})